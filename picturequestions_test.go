package main

import (
	assert2 "github.com/stretchr/testify/assert"
	"testing"
)

func Test_loadPictureAnswers(t *testing.T) {

	pictureAnswers := loadPictureAnswers()

	assert2.NotNil(t, pictureAnswers, "")

}
