package server

import (
	"github.com/gin-gonic/gin"
	"log"
	"path"
	"path/filepath"
	"reccengine/service"
)

func SetupRouter() *gin.Engine {

	router := gin.Default()

	// This will ensure that the angular files are served correctly
	// It basically points GinGonic to the output of "ng build" command
	// TODO currently this works kinda "automagic" figure out what the exact mechanism here is. Bc. .NoRoute is acutlly for 404s
	router.NoRoute(func(c *gin.Context) {
		dir, file := path.Split(c.Request.RequestURI)
		ext := filepath.Ext(file)
		if file == "" || ext == "" {
			c.File("./ui/ft-frontend/dist/ft-frontend/index.html")
		} else {
			c.File("./ui/ft-frontend/dist/ft-frontend/" + path.Join(dir, file))
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

func setupQuestionnaireRoutes(router *gin.Engine) *gin.Engine {

	router.GET("/api/questionnaires/", getQuestionnaireList)

	router.GET("/api/questionnaires/:kind", getQst)
	return router
}

func getQuestionnaireList(c *gin.Context) {

	svc := service.GetQuestionnaireService()
	list := svc.QstMapping.Keys()

	c.JSON(200, list)
}

func getQst(c *gin.Context) {
	kind := c.Param("kind")
	svc := service.GetQuestionnaireService()
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
