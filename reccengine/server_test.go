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
	q := _testUtils.CreateTestQuestionnaire(-1)

	data, _ := json.Marshal(q)
	req, _ := http.NewRequest("POST", "/api/questionnaires/submit/single", bytes.NewBuffer(data))
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
	fmt.Println(w.Body)

}

func TestPostQArr(t *testing.T) {

	router := SetupRouter()

	w := httptest.NewRecorder()

	qArr := make([]api.McQuestionnaire, 1)

	q := _testUtils.CreateTestQuestionnaire(1)

	qArr[0] = q
	data, _ := json.Marshal(qArr)

	req, _ := http.NewRequest("POST", "/api/questionnaires/submit", bytes.NewBuffer(data))
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
	fmt.Println(w.Body)
}
