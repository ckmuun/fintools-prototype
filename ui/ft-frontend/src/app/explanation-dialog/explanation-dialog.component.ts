import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Router} from "@angular/router";


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-explanation-dialog',
  templateUrl: './explanation-dialog.component.html',
  styleUrls: ['./explanation-dialog.component.css']
})
export class ExplanationDialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: {text: string},) { }
  ngOnInit(): void {

  }


}
