package main

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"log"
	"net/http"
	"path"
	"path/filepath"
	"reccengine/api"
	"reccengine/engineImpl"
	"reccengine/profiles"
	"reccengine/questionnaireImpl"
	"reccengine/results"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "DELETE, GET, OPTIONS, POST, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func SetupRouter() *gin.Engine {

	router := gin.Default()
	//	router.Use(cors.Default())
	router.Use(CORSMiddleware())

	// This will ensure that the angular files are served correctly
	// It basically points GinGonic to the output of "ng build" command
	router.NoRoute(func(c *gin.Context) {
		dir, file := path.Split(c.Request.RequestURI)
		ext := filepath.Ext(file)

		if file == "" || ext == "" {
			c.File("./ui/ft-frontend/dist/ft-frontend/index.html")
		} else {
			c.File("./ui/ft-frontend/dist/ft-frontend" + path.Join(dir, file))
		}

	})

	// setup dummy endpoint
	router.GET("/api/ping", pong)

	// setup functional endpoints
	setupAdminRoutes(router)
	setupQuestionnaireRoutes(router)

	return router
}

func setupAdminRoutes(router *gin.Engine) *gin.Engine {

	adminEndpoints := router.Group("/admin", gin.BasicAuth(gin.Accounts{
		"admin": "super-secret-pwd",
	}))
	adminEndpoints.GET("", getResults)

	return router
}

func getResults(c *gin.Context) {

	c.JSON(200, results.GetFileResultSvc().GetRecommendationResults())
}

/*
	all api endpoints, in no particular order, with the http verb and the corresponding processing function
*/
func setupQuestionnaireRoutes(router *gin.Engine) {

	router.POST("/api/tripwire", processFinancialSituationForTripwire)
	router.POST("/api/questionnaires/submit", postFilledQuestionnaires)
	router.GET("/api/submitted-results", loadSubmittedResults)
	router.POST("/api/questionnaires/submit/single", postSingleQuestionnaire)
	router.GET("/api/questionnaires", getQuestionnaireList)
	router.GET("/api/profiles", getUserProfiles)
	router.GET("/api/questionnaires/:kind", getQst)
	router.GET("/api/questionnaires/all", getAll)
	router.POST("/api/feedback", postFeedback)
	router.GET("/api/random", getRandomSampleOfStrategies)
	router.GET("/api/submitted-feedback", loadSubmittedFeedback)

}

func loadSubmittedResults(c *gin.Context) {
	resp := results.GetFileResultSvc().GetQSubmits()

	if nil != resp {
		c.JSON(200, resp)
		return
	}
	c.JSON(500, "could not load submitted results from disk")
}

func loadSubmittedFeedback(c *gin.Context) {
	resp := results.GetFileResultSvc().GetFeedback()

	if nil != resp {
		c.JSON(200, resp)
		return
	}
	c.JSON(500, "could not load submitted feedback from disk")

}

/*
	This endpoint handler function returns the predefined user profiles.
*/
func getUserProfiles(c *gin.Context) {
	c.JSON(200, profiles.GetProfileService().GetProfiles())
}

/*
	The so-called tripwire serves the purpose to weed out people who are massively indebted,
	and therefore do not need any investment advice.
*/
func processFinancialSituationForTripwire(c *gin.Context) {
	var financialHealthQ api.McQuestionnaire

	if err := c.ShouldBindJSON(&financialHealthQ); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	if financialHealthQ.Category != "Financial Risk Tolerance" {
		c.JSON(400, "Unfortunately, your financial situation is apparently too bad for giving out proper investment advice. Please look into ways to improve your income, and savings, as well as reduce debt")
	}

	c.JSON(200, engineImpl.CalculateTripwireFiring(financialHealthQ))

}

func getRandomSampleOfStrategies(c *gin.Context) {
	c.JSON(200, engineImpl.GenerateRandomSample())
}

func postFeedback(c *gin.Context) {

	var feedbackArr []api.StrategyFeedback

	if err := c.ShouldBindJSON(&feedbackArr); err != nil {
		log.Print("could not bind feedback arr to json")
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	for _, feedback := range feedbackArr {
		persisted, err := results.GetFileResultSvc().PersistFeedback(feedback)

		if nil != err || !persisted {
			c.JSON(500, feedbackArr[0].UserId)
			return
		}
	}
	log.Print("successfully persisted feedback to file, return 200")
	// return 200 and the user id the feedback was submitted for.
	c.JSON(200, feedbackArr[0].UserId)
}

func postSingleQuestionnaire(c *gin.Context) {
	var q api.McQuestionnaire

	if err := c.ShouldBindJSON(&q); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	log.Println(q.Finished())
	c.JSON(200, uuid.New())
}

/*
	POST filled questionnaires to server
*/
func postFilledQuestionnaires(c *gin.Context) {

	var submitDto api.SubmitDto

	// first step, syntactically validate if input is parseable
	if err := c.ShouldBindJSON(&submitDto); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// second step, semantically validate if the input is prcessable
	for index := range submitDto.Questionnaires {

		q := submitDto.Questionnaires[index]

		if !q.Finished() {
			c.JSON(http.StatusBadRequest, "at least one questionnaire is not completed")
			return
		}
	}

	persisted, err := results.GetFileResultSvc().PersistQSubmit(submitDto)

	if nil != err || !persisted {
		c.JSON(500, "could not persist submitted results")
		return
	}

	c.JSON(200, processQuestionnaires(submitDto.Questionnaires, submitDto.Profile))
}

/*
	Process
*/
func processQuestionnaires(qs []api.McQuestionnaire, profile api.UserProfile) api.FintoolRecomDto {

	dto := engineImpl.GenerateRecommendation(qs, profile)
	dto.Id = uuid.New()

	log.Print("returning user scores: ", dto.UserScores)
	//	jsonBytes, _ := json.Marshal(dto)
	//	var jsonDto string = string(jsonBytes)
	//	log.Print("returning json body", jsonDto)

	return dto
}

func getQuestionnaireList(c *gin.Context) {

	svc := questionnaireImpl.GetQuestionnaireService()
	list := svc.QstMapping.Keys()

	c.JSON(200, list)
}

func getAll(c *gin.Context) {
	svc := questionnaireImpl.GetQuestionnaireService()

	all := svc.QstMapping.Values()
	c.JSON(200, all)
}

func getQst(c *gin.Context) {
	kind := c.Param("kind")
	svc := questionnaireImpl.GetQuestionnaireService()
	log.Println("getting getQst", kind)

	q, found := svc.QstMapping.Get(kind)

	if nil == q || !found {
		log.Println("the following questionnaire kind could not be found: " + kind)
		c.JSON(404, "the following questionnaire kind could not be found: "+kind)
		return
	}
	c.JSON(200, q)

}

func pong(c *gin.Context) {
	c.JSON(200, "pong")
}
