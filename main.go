package main

import (
	"github.com/rs/zerolog/log"
	"github.com/spf13/viper"
	"os"
)

func main() {

	log.Print("initializing Fintool GoodRecommendation Engine Backend")

	router := SetupRouter()

	port, ok := os.LookupEnv("PORT")
	if !ok {
		port = "8080"
	}

	_ = router.Run(":" + port)

}

func setupViper() {
	viper.SetEnvPrefix("FINTOOLS")
	// TODO do BindEnv calls here. Currently not known which are necessary
}
