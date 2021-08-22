package results

import (
	"github.com/google/uuid"
	"reccengine/api"
)

type ResultSvc interface {
	PersistResult(dto api.FintoolRecomDto) bool
	PersistFeedback(feedback []api.StrategyFeedback) bool
	RetrieveResult(uuid uuid.UUID) api.FintoolRecomDto
	RetrieveFeedback(uuid2 uuid.UUID) []api.StrategyFeedback
	RetrieveAllResults() []api.FintoolRecomDto
	RetrieveAllFeedback() []api.StrategyFeedback
}
