package api

type UserProfile struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	Reason      string   `json:"reason"`
}

func DefaultUserProfile() UserProfile {
	tags := make([]string, 1)
	tags[0] = "default"

	return UserProfile{
		"default",
		"default",
		tags,
		"default",
	}
}
