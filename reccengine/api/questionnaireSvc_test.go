package api

import (
	"log"
	"testing"
)

func testQuestionnaireLoading(t *testing.T) {

	qsvc := GetQuestionnaireService()

	basicQ := qsvc.BasicQuestionnaire

	log.Println(basicQ)
}
