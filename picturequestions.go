package main

import (
	"encoding/json"
	"log"
	"reccengine/api"
	"reccengine/utils"
)

func init() {

}

func loadPictureAnswers() []api.PictureMcAnswer {

	var pictureMcAnswers []api.PictureMcAnswer
	file := utils.LoadJsonFileIntoByteArr("../resources/picture-filepaths-captions.json")

	_ = json.Unmarshal([]byte(file), &pictureMcAnswers)
	log.Println(pictureMcAnswers)
	return pictureMcAnswers
}
