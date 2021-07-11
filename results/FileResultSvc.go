package results

import (
	"encoding/json"
	"github.com/spf13/viper"
	"io/ioutil"
	"os"
	"reccengine/api"
	"strings"
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
	resultsFilepath        string
	feedbackFilepath       string
	firstResultPersisted   sync.Once
	firstFeedbackPersisted sync.Once
}

func GetFileResultSvc() *FileResultSvc {
	return &instance
}

func init() {
	_ = viper.BindEnv("RESULTS_FILEPATH")
	_ = viper.BindEnv("FEEDBACK_FILEPATH")
	resultsFilepath := viper.GetString("RESULTS_FILEPATH")
	feedbackFilepath := viper.GetString("FEEDBACK_FILEPATH")

	once.Do(func() {
		// Instantiate the service singleton
		instance = FileResultSvc{
			resultsFilepath:  resultsFilepath,
			feedbackFilepath: feedbackFilepath,
		}
		// prepend the json resultFile for results
		resultFile, err := os.OpenFile(resultsFilepath, os.O_APPEND|os.O_WRONLY|os.O_CREATE, 777)
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

	})
}

// add initial chars
func prepareResultsFileForInit(file *os.File) {
	_, _ = file.WriteString("[")
}

func getSerializedString(v interface{}) (string, error) {
	serialized, err := json.Marshal(v)
	if err != nil {
		return "", err
	}
	return string(serialized), nil

}

// https://stackoverflow.com/questions/13514184/how-can-i-read-a-whole-file-into-a-string-variable
func (f *FileResultSvc) GetFeedback() string {
	buf, _ := ioutil.ReadFile(f.feedbackFilepath)

	jsonString := string(buf)

	jsonString = strings.TrimSuffix(jsonString, ",")
	return jsonString + "]"
}

/*
	Persist resulting dto to disk
*/
func (f *FileResultSvc) PersistResult(dto api.FintoolRecomDto) (bool, error) {

	serializedString, err := getSerializedString(dto)

	file, _ := os.OpenFile(f.resultsFilepath, os.O_APPEND|os.O_WRONLY, 777)

	if _, err = file.WriteString("\n" + serializedString + ","); err != nil {
		return false, err
	}
	return true, nil
}

func (f *FileResultSvc) GetResults() string {
	buf, _ := ioutil.ReadFile(f.feedbackFilepath)

	jsonString := string(buf)

	jsonString = strings.TrimSuffix(jsonString, ",")
	return jsonString + "]"
}

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

func (f *FileResultSvc) PersistFeedback(feedback api.StrategyFeedback) (bool, error) {

	return true, nil
}
