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
	router.NoRoute(func(c *gin.Context) {
		dir, file := path.Split(c.Request.RequestURI)
		ext := filepath.Ext(file)
		if file == "" || ext == "" {
			c.File("./ui/ft-frontend/dist/ft-frontend/index.html")
		} else {
			c.File("./ui/ft-frontend/dist/ft-frontend/" + path.Join(dir, file))
		}
	})

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
