package main

import (
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog/log"
	"github.com/spf13/viper"
)

func main() {

	log.Print("initializing Fintool Recommendation Engine Backend")

	router := setupRouter()

	_ = router.Run(":7079")

}

func setupViper() {
	viper.SetEnvPrefix("FINTOOLS")
	// TODO do BindEnv calls here. Currently not known which are necessary
}

func setupRouter() *gin.Engine {

	router := gin.Default()

	router.GET("/questionnaires/:kind", func(c *gin.Context) {

	})

	return router
}
