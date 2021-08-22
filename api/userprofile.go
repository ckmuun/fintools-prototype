package api

type UserProfile struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	Reason      string   `json:"reason"`
	ScoreContainer
}

func DefaultUserProfile() UserProfile {
	tags := make([]string, 1)
	tags[0] = "default"

	return UserProfile{
		"default",
		"default",
		tags,
		"default",
		ScoreContainer{
			FinRiskTolerance:   0,
			PsyRiskTolerance:   0,
			TimeFlexibility:    0,
			CogBiasResistance:  0,
			FinancialKnowledge: 0,
		},
	}
}
