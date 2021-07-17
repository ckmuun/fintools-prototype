package api

type UserProfile struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	Reason      string   `json:"reason"`
}
