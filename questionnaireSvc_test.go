package main

import (
	assert2 "github.com/stretchr/testify/assert"
	"log"
	"testing"
)

func testQuestionnaireLoading(t *testing.T) {

	qsvc := GetQuestionnaireService()

	basicQ := qsvc.BasicQuestionnaire

	assert2.NotNil(t, qsvc, "")

	log.Println(basicQ)
}
