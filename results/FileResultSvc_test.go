package results

import (
	"encoding/json"
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
	log.Print("testing recommendation result persistence to file")
	recomDto := _testUtils.GetExampleFintoolRecomDto()

	viper.Set("RESULTS_FILEPATH", "test.json")

	fileResultSvc := GetFileResultSvc()

	success, err := fileResultSvc.PersistRecommendationResult(recomDto)
	assert2.Nil(t, err)
	assert2.True(t, success)

}
func TestFileResultSvc_QSubmitPesist(t *testing.T) {
	log.Print("testing submitted questiionnaires persistence to file")
	qSubmit := _testUtils.GetDefaultQSubmitDto()

	fileResultSvc := GetFileResultSvc()

	_, _ = fileResultSvc.PersistQSubmit(qSubmit)

	qSubmitFromPers := fileResultSvc.GetQSubmits()[0]

	assert2.True(t, qSubmit.Profile.Name == qSubmitFromPers.Profile.Name)
}

func TestFileResultSvc_FeedbackPersist(t *testing.T) {
	log.Print("testing feedback  persistence to file")
	feedback := _testUtils.GetExampleFeedbackArray()[0]
	fileResultSvc := GetFileResultSvc()

	_, _ = fileResultSvc.PersistFeedback(feedback)
	feedbackPers := fileResultSvc.GetFeedback()[0]
	assert2.True(t, feedback.StrategyName == feedbackPers.StrategyName)
}

/*

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
*/
