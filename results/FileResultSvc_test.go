package results

import (
	"encoding/json"
	"fmt"
	"github.com/spf13/viper"
	assert2 "github.com/stretchr/testify/assert"
	"log"
	"os"
	"reccengine/_testUtils"
	"testing"
)

// simple test struct
type Example struct {
	Value string `json:"value"`
}

func TestJsonFileAppending(t *testing.T) {
	exp := Example{Value: "someval"}

	serialized, _ := json.Marshal(exp)
	serializedString := string(serialized)

	file, _ := os.OpenFile("test.json", os.O_APPEND|os.O_WRONLY|os.O_CREATE, 777)
	defer file.Close()

	log.Print(serializedString)

	_, _ = file.WriteString(serializedString)
	_, _ = file.WriteString("\n")

	// rm temp test file
	_ = os.Remove("test.json")
}

func TestFileResultSvc_PersistResult(t *testing.T) {
	recomDto := _testUtils.GetExampleFintoolRecomDto()

	viper.Set("RESULTS_FILEPATH", "test.json")

	fileResultSvc := GetFileResultSvc()

	success, err := fileResultSvc.PersistRecommendationResult(recomDto)
	assert2.Nil(t, err)
	assert2.True(t, success)

}

func TestFileResultSvc_PersistFeedback(t *testing.T) {

	feedback := _testUtils.GetExampleFeedbackArray()
	fileResultSvc := GetFileResultSvc()

	success, err := fileResultSvc.PersistFeedbackArr(feedback)

	fmt.Println("result", fileResultSvc.GetFeedback())

	assert2.Nil(t, err)
	assert2.True(t, success)
	_ = os.Remove("test.json")
	_ = os.Remove("feedback.json")
}

func TestFileResultSvc_PersistQSubmit(t *testing.T) {

	feedback := _testUtils.GetExampleFeedbackArray()
	fileResultSvc := GetFileResultSvc()

	success, err := fileResultSvc.PersistFeedbackArr(feedback)

	fmt.Println("result", fileResultSvc.GetFeedback())

	assert2.Nil(t, err)
	assert2.True(t, success)
	_ = os.Remove("test.json")
	_ = os.Remove("feedback.json")
}
