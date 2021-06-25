package engineImpl

import (
	"log"
	"math"
	"reccengine/api"
)

func CalculateQuestionnaireScores(questionnaires []api.McQuestionnaire) (api.ScoreContainer, error) {

	// initialize the total score container
	totalScore := api.ScoreContainer{
		FinRiskTolerance:   0,
		PsyRiskTolerance:   0,
		TimeFlexibility:    0,
		CogBiasResistance:  0,
		FinancialKnowledge: 0,
	}

	// add scores of the individual questionnaires
	for _, questionnaire := range questionnaires {
		questionnaireScore, err := questionnaire.GetAveragedAnswers()

		if err != nil {
			return totalScore, err
		}

		switch questionnaire.Category {

		case TIME_FLEXIBILITY:
			totalScore.TimeFlexibility += questionnaireScore
		case FINANCIAL_RISK_TOLERANCE:
			totalScore.FinRiskTolerance += questionnaireScore
		case PSYCHOLOGICAL_RISK_TOLERANCE:
			totalScore.PsyRiskTolerance += questionnaireScore
		case FINANCIAL_KNOWLEDGE:
			totalScore.FinancialKnowledge += questionnaireScore
		case COGNITIVE_BIAS_RESISTANCE:
			totalScore.CogBiasResistance += questionnaireScore
		}

	}
	return totalScore, nil
}

func EuclideanDistance(score api.ScoreContainer, another api.ScoreContainer) float64 {

	// we just pretend these slices are vectors
	vectorA := score.GetVectorArr()
	vectorB := another.GetVectorArr()

	temp := 0

	for index := range vectorA {

		p := vectorA[index]
		q := vectorB[index]

		tmp := q - p
		tmpSquared := tmp * tmp
		temp += tmpSquared
	}
	log.Println("raw temp distance: ", temp)
	sqrt := math.Sqrt(float64(temp))
	log.Println("sqrt euclid distance: ", sqrt)
	return sqrt
}
