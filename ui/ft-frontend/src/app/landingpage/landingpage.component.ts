import {Component, Inject, OnInit} from '@angular/core';
import {ProfilesService, UserProfile} from "../profiles.service";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  profiles: UserProfile[] =  []

  constructor(private profilesService: ProfilesService) {
  }

  ngOnInit(): void {
    this.profilesService.getQuestionnaires().subscribe(
      profiles => {
        this.profiles = profiles;
      }
    )
  }

  redirect() {
    console.log("implement me")
  }

}



