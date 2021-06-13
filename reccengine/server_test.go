package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/stretchr/testify/assert"
	"net/http"
	"net/http/httptest"
	"reccengine/_testUtils"
	"testing"
)

func TestRouter(t *testing.T) {

	router := SetupRouter()

	w := httptest.NewRecorder()

	q := _testUtils.CreateTestQuestionnaire(1)

	data, _ := json.Marshal(q)

	req, _ := http.NewRequest("POST", "/api/questionnaires/submit", bytes.NewBuffer(data))
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
	fmt.Println(w.Body)
}
