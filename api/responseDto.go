package api

import "github.com/google/uuid"

type FintoolRecomDto struct {
	Id             uuid.UUID    `json:"id"`
	Recommendation FintoolRecom `json:"recommendation"`
}
