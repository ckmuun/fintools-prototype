package main

import (
	"github.com/rs/zerolog/log"
	"github.com/spf13/viper"
	"os"
	"reccengine/server"
)

func main() {

	log.Print("initializing Fintool Recommendation Engine Backend")

	router := server.SetupRouter()

	port, ok := os.LookupEnv("PORT")
	if !ok {
		port = "8080"
	}

	_ = router.Run(":" + port)

}

func instantiateSingletonServices() {

	// todo instantiate user db service
}

func setupViper() {
	viper.SetEnvPrefix("FINTOOLS")
	// TODO do BindEnv calls here. Currently not known which are necessary
}
