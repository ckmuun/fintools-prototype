package engineImpl

import (
	"encoding/json"
	"github.com/stretchr/testify/assert"
	"log"
	"reccengine/api"
	"testing"
)

func TestGenerateRecommendation(t *testing.T) {
}

func Test_parseScoreContainer(t *testing.T) {

	var jsonString = `{
      "fin_risk_tolerance": 7,
      "psy_risk_tolerance": 5,
      "time_flexibility": 7,
      "cog_bias_resistance": 4,
      "finance_knowledge": 5
}`

	var sc api.ScoreContainer

	_ = json.Unmarshal([]byte(jsonString), &sc)

	assert.False(t, sc.PsyRiskTolerance == 0)
	assert.False(t, sc.FinancialKnowledge == 0)
	assert.False(t, sc.FinRiskTolerance == 0)
	assert.False(t, sc.CogBiasResistance == 0)
	assert.False(t, sc.TimeFlexibility == 0)

	anotherSc := api.ScoreContainer{
		FinRiskTolerance:   1,
		PsyRiskTolerance:   2,
		TimeFlexibility:    3,
		CogBiasResistance:  4,
		FinancialKnowledge: 5,
	}

	serBytes, _ := json.Marshal(anotherSc)
	var encoded string = string(serBytes)

	log.Println(encoded)
}

func Test_loadStrategyComponents(t *testing.T) {

	components := loadStrategyComponents()
	assert.NotNil(t, components, "")

	for _, component := range components {
		assert.NotNil(t, component, "")

		assert.False(t, component.PsyRiskTolerance == 0)
		assert.False(t, component.FinancialKnowledge == 0)
		assert.False(t, component.FinRiskTolerance == 0)
		assert.False(t, component.CogBiasResistance == 0)
		assert.False(t, component.TimeFlexibility == 0)
	}
}
