package api

// McQuestion Tier Scale
const (
	BaselineQuestion = iota
	AdvancedFinancialQuestion
	CognitiveBiasQuestion
)

// Risk Scale
const (
	Riskfree = iota
	MinorRisk
	MitigatableRisk
	SubstantialRisk
	HighRisk
)

// McQuestion Scaling enum
const (
	Absolute = iota
	Relative
	Boolean
	Categorical
)

// Flexibility Scale
const (
	Static = iota
	MultiYearCommit
	MultiMonthCommit
	ShortTermCommit
	IntradayCommit
)

// Time Effort Scale
const (
	Passive = iota
	Seldom
	Occasional
	PartTime
	FullTime
)

// Intellectual Effort Scale
const (
	NoSkillReq = iota
	InitialFlatSkillReq
	OccasionalUpdatesReq
	ContinnuousLearningReq
	FullTimeLearningReq
)

// Transaction Cost Level
const (
	Frictionless = iota
	LowTxCost
	HighTxCost
)
