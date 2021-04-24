package server

import "github.com/gin-gonic/gin"

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

	router.GET("/questionnaires/:kind", func(c *gin.Context) {

	})

	return router
}
