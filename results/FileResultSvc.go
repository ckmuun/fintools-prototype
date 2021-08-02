package results

import (
	"encoding/json"
	"github.com/spf13/viper"
	"io/ioutil"
	"log"
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
	current, _ := ioutil.ReadFile(file.Name())

	if current[0:1][0] == '[' {
		return
	}
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
func (f *FileResultSvc) PersistRecommendationResult(dto api.FintoolRecomDto) (bool, error) {

	serializedString, err := getSerializedString(dto)

	file, _ := os.OpenFile(f.recommendationResultsFilepath, os.O_APPEND|os.O_WRONLY, 777)

	if _, err = file.WriteString("\n" + serializedString + ","); err != nil {
		return false, err
	}
	return true, nil
}

func (f *FileResultSvc) GetRecommendationResults() string {
	buf, _ := ioutil.ReadFile(f.feedbackFilepath)

	jsonString := string(buf)

	jsonString = strings.TrimSuffix(jsonString, ",")
	return jsonString + "]"
}

func (f *FileResultSvc) PersistQSubmit(dto api.SubmitDto) (bool, error) {
	log.Print("writing submitted results to file")

	serializedString, err := getSerializedString(dto)
	serializedString = strings.ReplaceAll(serializedString, "\\", "")
	qsubmitFile, err := os.OpenFile(f.qSubmitFilepath, os.O_APPEND|os.O_WRONLY, 777)
	if _, err = qsubmitFile.WriteString(serializedString + ","); err != nil {
		return false, err
	}
	return true, nil
}

/*
	FIXME we need to parse and re-serialize this stuff. the string-based processing does not work properly with gin
*/
func (f *FileResultSvc) GetQSubmits() string {

	buf, _ := ioutil.ReadFile(f.qSubmitFilepath)

	jsonString := string(buf)

	jsonString = strings.TrimSuffix(jsonString, ",")
	return jsonString + ""

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

	// todo implement me
	return true, nil
}
