package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/stretchr/testify/assert"
	"net/http"
	"net/http/httptest"
	"reccengine/_testUtils"
	"reccengine/api"
	"reccengine/engineImpl"
	"testing"
)

func TestPostExample(t *testing.T) {
	router := SetupRouter()
	w := httptest.NewRecorder()

	e := Example{Value: "oioioioi"}
	data, _ := json.Marshal(e)

	req, _ := http.NewRequest("POST", "/api/test", bytes.NewBuffer(data))
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
	fmt.Println(w.Body)
}

func TestPostSingleQ(t *testing.T) {
	router := SetupRouter()
	w := httptest.NewRecorder()
	q := _testUtils.CreateTestQuestionnairesForCategories(1, engineImpl.CATEGORIES)

	// just take the first questionnaire
	data, _ := json.Marshal(q[0])
	req, _ := http.NewRequest("POST", "/api/questionnaires/submit/single", bytes.NewBuffer(data))
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
	fmt.Println(w.Body)
}

func TestPostQArr(t *testing.T) {

	router := SetupRouter()

	w := httptest.NewRecorder()

	qArr := _testUtils.CreateTestQuestionnairesForCategories(1, engineImpl.CATEGORIES)
	data, _ := json.Marshal(qArr)
	req, _ := http.NewRequest("POST", "/api/questionnaires/submit", bytes.NewBuffer(data))
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)

	var dto api.FintoolRecomDto

	_ = json.Unmarshal(w.Body.Bytes(), &dto)

	fmt.Println(dto)
	assert.NotNil(t, dto, "")
}

func TestDloadQsAndPostThem(t *testing.T) {
	router := SetupRouter()
	w := httptest.NewRecorder()

	var questionnaires []api.McQuestionnaire
	getRequest, _ := http.NewRequest("GET", "/api/questionnaires/all", nil)
	router.ServeHTTP(w, getRequest)

	assert.Equal(t, 200, w.Code)
	_ = json.Unmarshal(w.Body.Bytes(), &questionnaires)

	for i, questionnaire := range questionnaires {

		for ii := range questionnaire.Questions {
			questionnaires[i].Questions[ii].ChosenAnswerIndex = 1
		}
	}
	postRecorder := httptest.NewRecorder()
	data, _ := json.Marshal(questionnaires)
	postRequest, _ := http.NewRequest("POST", "/api/questionnaires/submit", bytes.NewBuffer(data))
	router.ServeHTTP(postRecorder, postRequest)

	assert.Equal(t, 200, postRecorder.Code)
	var dto api.FintoolRecomDto

	_ = json.Unmarshal(postRecorder.Body.Bytes(), &dto)

	fmt.Println(dto)
	assert.NotNil(t, dto, "")

	assert.False(t, dto.UserScores.TimeFlexibility == 0)
}
