package profiles

import (
	"encoding/json"
	"log"
	"reccengine/api"
	"reccengine/utils"
	"sync"
)

var once sync.Once

var profileService *ProfileServiceImpl

func init() {

	once.Do(func() {
		log.Println("initializing Questionnaire service")
		profileService = NewProfileServiceImpl()
	},
	)
}

func GetProfileService() ProfileService {
	return profileService
}

type ProfileService interface {
	GetProfiles() []api.UserProfile
}

type ProfileServiceImpl struct {
	profiles []api.UserProfile
}

func NewProfileServiceImpl() *ProfileServiceImpl {
	return &ProfileServiceImpl{
		loadProfilesFromJson(),
	}
}

func (p *ProfileServiceImpl) GetProfiles() []api.UserProfile {
	return p.profiles
}

func loadProfilesFromJson() []api.UserProfile {

	var profiles []api.UserProfile
	file := utils.LoadJsonFileIntoByteArr("./_resources/userProfiles.json")

	_ = json.Unmarshal([]byte(file), &profiles)
	log.Println(profiles)
	return profiles
}
