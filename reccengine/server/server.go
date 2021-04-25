package server

import (
	"github.com/gin-gonic/gin"
	"log"
	"reccengine/service"
)

func SetupRouter() *gin.Engine {

	router := gin.Default()

	setupUserRoutes(router)
	setupQuestionnaireRoutes(router)

	return router
}

func setupUserRoutes(router *gin.Engine) *gin.Engine {
	router.POST("/users/new", func(c *gin.Context) {
		// todo add call to user creation service
	})

	return router
}

func setupQuestionnaireRoutes(router *gin.Engine) *gin.Engine {

	router.GET("/ping", pong)

	router.GET("/questionnaires/:kind", getQst)
	return router
}

func getQst(c *gin.Context) {
	kind := c.Param("kind")
	svc := service.GetQuestionnaireService()
	log.Println("getting getQst", kind)

	q := svc.QstMapping[kind]

	if nil == q {
		log.Println("the following questionnaire kind could not be found: " + kind)
		c.JSON(404, "the following questionnaire kind could not be found: "+kind)
		return
	}
	c.JSON(200, q)

}

func pong(c *gin.Context) {
	c.JSON(200, "pong")
}
