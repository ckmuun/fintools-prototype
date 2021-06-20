package main

import (
	"encoding/json"
	"log"
	"reccengine/api"
)

func init() {

}

func loadPictureAnswers() []api.PictureMcAnswer {

	var pictureMcAnswers []api.PictureMcAnswer
	file := loadQuestionnaireFile("../resources/picture-filepaths-captions.json")

	_ = json.Unmarshal([]byte(file), &pictureMcAnswers)
	log.Println(pictureMcAnswers)
	return pictureMcAnswers
}
