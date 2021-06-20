package api

import "github.com/google/uuid"

type FintoolRecomDto struct {
	Id         uuid.UUID  `json:"id"`
	Strategies []Strategy `json:"strategies"`
}
