import {Component, Inject, OnInit} from '@angular/core';
import {ProfilesService, UserProfile} from "../profiles.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ExplanationDialogComponent} from "../explanation-dialog/explanation-dialog.component";
import {NextPageDialogComponent} from "../next-page-dialog/next-page-dialog.component";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  profiles: UserProfile[] = [];

  selectedProfileIndex: number = -1;

  showRedirectDialog: boolean = false;


  constructor(private profilesService: ProfilesService, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.profilesService.getQuestionnaires().subscribe(
      profiles => {
        this.profiles = profiles;
      }
    )
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(ExplanationDialogComponent, {
      data: {
        text: "This is the entrypoint page to our personal finance strategy recommendation and exploration tool.\n" +
          "Before we can look at actual strategies, we need some input first.\n" +
          "On this page, please read through the list of predefined profiles and select one  you find most fitting for yourself by clicking on it.\n" +
          "The page will then redirect to our questionnaire site which will display the next help text." +
          "\n A note on data collection: The application does not in any way identify you. No information like IP, " +
          "session, device type, operating system or other browser data is stored. However, the questionnaire results are " +
          "saved under a randomly generated anonymous technical key." +
          "\n" +
          "\n This prototype was created by Lars von Fromberg & Cornelius Koller, both M.Sc. students at the " +
          "Technical University of Munich." +
          "\n Please note that this is an experimental prototype."

      }
    });
  }

  getIfSelectedProfile(index: number): boolean {
    return index === this.selectedProfileIndex;
  }

  openNextPageDialog(): void {
    this.dialog.open(NextPageDialogComponent, {
      data: {
        text: "",
        redirectUri: "/get-started"
      }
    })
  }

  prettifyProfileTag(tag: string): string {
    if (tag === "etf") {
      return tag.toUpperCase()
    }

    let dashReplaceRegex = /[_\-]/gi;

    return tag.replace(dashReplaceRegex, " ")
  }

  selectProfile(index: number, profile: UserProfile): void {
    console.log("profile selected")
    this.selectedProfileIndex = index;
    this.profilesService.cacheChosenProfile(profile);
    this.openNextPageDialog();
  }


  redirect(): void {
    this.router.navigateByUrl("/get-started")

  }

}



