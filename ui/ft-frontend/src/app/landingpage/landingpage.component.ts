import {Component, Inject, OnInit} from '@angular/core';
import {ProfilesService, UserProfile} from "../profiles.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  profiles: UserProfile[] = []

  constructor(private profilesService: ProfilesService, private router: Router) {
  }

  ngOnInit(): void {
    this.profilesService.getQuestionnaires().subscribe(
      profiles => {
        this.profiles = profiles;
      }
    )
  }

  redirect(profile: UserProfile) {
    this.profilesService.cacheChosenProfile(profile);
    this.router.navigateByUrl("/get-started")

  }

}



