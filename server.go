package main

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"log"
	"net/http"
	"path"
	"path/filepath"
	"reccengine/api"
	"reccengine/engineImpl"
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
	// TODO currently this works kinda "automagic" figure out what the exact mechanism here is. Bc. .NoRoute is acutlly for 404s
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
	setupUserRoutes(router)
	setupQuestionnaireRoutes(router)

	return router
}

func setupUserRoutes(router *gin.Engine) *gin.Engine {
	router.POST("/api/users/new", func(c *gin.Context) {
		// todo add call to user creation service
	})

	return router
}

func setupQuestionnaireRoutes(router *gin.Engine) {

	router.POST("/api/test", postExample)
	router.POST("/api/questionnaires/submit", postFilledQuestionnaires)
	router.POST("/api/questionnaires/submit/single", postSingleQuestionnaire)
	router.GET("/api/questionnaires", getQuestionnaireList)
	router.GET("/api/questionnaires/:kind", getQst)
	router.GET("/api/questionnaires/all", getAll)
	router.POST("/api/feedback", postFeedback)

}

func postFeedback(c *gin.Context) {

}

func postExample(c *gin.Context) {
	var e Example

	if err := c.ShouldBindJSON(&e); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	log.Println("value: ", e.Value)
	c.JSON(200, uuid.New())
}

type Example struct {
	Value string `json:"value"`
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

	var questionnaires []api.McQuestionnaire

	// first step, syntactically validate if input is parseable
	if err := c.ShouldBindJSON(&questionnaires); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// second step, semantically validate if the input is prcessable
	for index := range questionnaires {

		q := questionnaires[index]

		if !q.Finished() {
			c.JSON(http.StatusBadRequest, "at least one questionnaire is not completed")
			return
		}
	}

	// TODO save the questionnaire here, log the answers, do further middlwware processing

	c.JSON(200, processQuestionnaires(questionnaires))
}

/*
	Process
*/
func processQuestionnaires(qs []api.McQuestionnaire) api.FintoolRecomDto {

	dto := engineImpl.GenerateRecommendation(qs)
	dto.Id = uuid.New()

	/*
		TODO log response here
	*/

	log.Print("returning user scores: ", dto.UserScores)
	jsonBytes, _ := json.Marshal(dto)

	var jsonDto string = string(jsonBytes)

	log.Print("returning json body", jsonDto)

	return dto
}

func getQuestionnaireList(c *gin.Context) {

	svc := GetQuestionnaireService()
	list := svc.QstMapping.Keys()

	c.JSON(200, list)
}

func getAll(c *gin.Context) {
	svc := GetQuestionnaireService()

	all := svc.QstMapping.Values()
	c.JSON(200, all)
}

func getQst(c *gin.Context) {
	kind := c.Param("kind")
	svc := GetQuestionnaireService()
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
