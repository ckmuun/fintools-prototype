package results

import (
	"encoding/json"
	"github.com/spf13/viper"
	"io/ioutil"
	"log"
	"os"
	"reccengine/api"
	"sync"
)

var (
	once     sync.Once
	instance FileResultSvc
)

/*
	A simple result service that writes feedback and recommendations in JSON format into a file.
*/
type FileResultSvc struct {
	recommendationResultsFilepath string
	feedbackFilepath              string
	qSubmitFilepath               string
	firstResultPersisted          sync.Once
	firstFeedbackPersisted        sync.Once
}

func GetFileResultSvc() *FileResultSvc {
	return &instance
}

func init() {
	log.Print("initializing result file writer service")
	viper.SetDefault("RESULTS_FILEPATH", "./results.json")
	viper.SetDefault("FEEDBACK_FILEPATH", "./feedback.json")
	viper.SetDefault("QSUBMIT_FILEPATH", "./qsubmit.json")

	_ = viper.BindEnv("RESULTS_FILEPATH")
	_ = viper.BindEnv("FEEDBACK_FILEPATH")
	_ = viper.BindEnv("QSUBMIT_FILEPATH")
	recommendationResultsFilepath := viper.GetString("RESULTS_FILEPATH")
	feedbackFilepath := viper.GetString("FEEDBACK_FILEPATH")
	qSubmitFilepath := viper.GetString("QSUBMIT_FILEPATH")

	once.Do(func() {
		// Instantiate the service singleton
		instance = FileResultSvc{
			recommendationResultsFilepath: recommendationResultsFilepath,
			feedbackFilepath:              feedbackFilepath,
			qSubmitFilepath:               qSubmitFilepath,
		}

		// prepend the json resultFile for results
		resultFile, err := os.OpenFile(recommendationResultsFilepath, os.O_APPEND|os.O_WRONLY|os.O_CREATE, 777)
		if err != nil {
			panic(err)
		}
		defer resultFile.Close()
		prepareResultsFileForInit(resultFile)

		feedbackFile, err := os.OpenFile(feedbackFilepath, os.O_APPEND|os.O_WRONLY|os.O_CREATE, 777)
		if err != nil {
			panic(err)
		}
		defer feedbackFile.Close()
		prepareResultsFileForInit(feedbackFile)

		qsubmitFile, err := os.OpenFile(qSubmitFilepath, os.O_APPEND|os.O_WRONLY|os.O_CREATE, 777)
		if err != nil {
			panic(err)
		}
		defer qsubmitFile.Close()
		prepareResultsFileForInit(qsubmitFile)
	})
}

// add initial chars
func prepareResultsFileForInit(file *os.File) {
	emptyArr := make([]interface{}, 1)

	serializedEmptyArr, _ := json.Marshal(emptyArr)

	_, _ = file.WriteString(string(serializedEmptyArr))
}

func getSerializedString(v interface{}) (string, error) {
	serialized, err := json.Marshal(v)
	if err != nil {
		return "", err
	}
	return string(serialized), nil

}

// https://stackoverflow.com/questions/13514184/how-can-i-read-a-whole-file-into-a-string-variable
func (f *FileResultSvc) GetFeedback() []api.StrategyFeedback {
	var feeedbackDtos []api.StrategyFeedback
	buf, _ := ioutil.ReadFile(f.feedbackFilepath)
	_ = json.Unmarshal(buf, &feeedbackDtos)

	return feeedbackDtos

}

/*
	Persist resulting dto to disk
*/
func (f *FileResultSvc) PersistRecommendationResult(dto api.FintoolRecomDto) (bool, error) {
	log.Print("writing recommendation to file")
	var recomDtos []api.FintoolRecomDto

	buf, _ := ioutil.ReadFile(f.recommendationResultsFilepath)

	_ = json.Unmarshal(buf, &recomDtos)

	recomDtos = append(recomDtos, dto)

	serialized, _ := json.Marshal(recomDtos)

	_ = os.Remove(f.recommendationResultsFilepath)
	_ = os.WriteFile(f.recommendationResultsFilepath, serialized, os.FileMode(777))

	return true, nil
}

func (f *FileResultSvc) GetRecommendationResults() []api.FintoolRecomDto {
	var recomDtos []api.FintoolRecomDto
	buf, _ := ioutil.ReadFile(f.recommendationResultsFilepath)
	_ = json.Unmarshal(buf, &recomDtos)

	return recomDtos
}

/*
	Blunt and inefficient file-based persistence. We load the json into an array, append the new item in-mem
	then delete and rewrite the source file.
	Json-String append does not work properly because Gin Gonic interprets it and inserts escape chars \
*/
func (f *FileResultSvc) PersistQSubmit(dto api.SubmitDto) (bool, error) {
	log.Print("writing submitted results to file")
	var submitDtos []api.SubmitDto

	buf, _ := ioutil.ReadFile(f.qSubmitFilepath)

	_ = json.Unmarshal(buf, &submitDtos)

	submitDtos = append(submitDtos, dto)

	serialized, _ := json.Marshal(submitDtos)

	_ = os.Remove(f.qSubmitFilepath)
	_ = os.WriteFile(f.qSubmitFilepath, serialized, os.FileMode(777))

	return true, nil
}

/*
	Load json string from file, deserialize in to object arr/slice and return it to Gin
	Just returning the json does not work properly because Gin Gonic applies some magic to it.
*/
func (f *FileResultSvc) GetQSubmits() []api.SubmitDto {

	var submittedDtos []api.SubmitDto
	buf, _ := ioutil.ReadFile(f.qSubmitFilepath)
	_ = json.Unmarshal(buf, &submittedDtos)

	return submittedDtos

}

/*
// flatten array and persist items to file
func (f *FileResultSvc) PersistFeedbackArr(feedbackArr []api.StrategyFeedback) (bool, error) {
	file, err := os.OpenFile(f.feedbackFilepath, os.O_APPEND|os.O_WRONLY, 777)

	if err != nil {
		return false, err
	}

	for _, feedback := range feedbackArr {

		serializedString, _ := getSerializedString(feedback)
		if _, err = file.WriteString("\n" + serializedString + ","); err != nil {
			return false, err
		}

	}

	return true, nil
}
*/

func (f *FileResultSvc) PersistFeedback(feedback api.StrategyFeedback) (bool, error) {
	log.Print("writing submitted feedback to file")
	var feedbackDtos []api.StrategyFeedback

	buf, _ := ioutil.ReadFile(f.feedbackFilepath)

	_ = json.Unmarshal(buf, &feedbackDtos)

	feedbackDtos = append(feedbackDtos, feedback)

	serialized, _ := json.Marshal(feedbackDtos)

	_ = os.Remove(f.feedbackFilepath)
	_ = os.WriteFile(f.feedbackFilepath, serialized, os.FileMode(777))

	return true, nil
}
