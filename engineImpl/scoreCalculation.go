package engineImpl

import "reccengine/api"

func CalculateQuestionnaireScores(questionnaires []api.McQuestionnaire) (api.ScoreContainer, error) {

	// initialize the total score container
	totalScore := api.ScoreContainer{
		FinRiskTolerance:  0,
		PsyRiskTolerance:  0,
		TimeFlexibility:   0,
		CogBiasResistance: 0,
		FinanceKnowledge:  0,
	}

	// add scores of the individual questionnaires
	for _, questionnaire := range questionnaires {
		questionnaireScore, err := questionnaire.GetAnswersSum()

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
			totalScore.FinanceKnowledge += questionnaireScore
		case COGNITIVE_BIAS_RESISTANCE:
			totalScore.CogBiasResistance += questionnaireScore
		}

	}
	return totalScore, nil
}
