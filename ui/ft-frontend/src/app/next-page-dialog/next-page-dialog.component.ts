import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-next-page-dialog',
  templateUrl: './next-page-dialog.component.html',
  styleUrls: ['./next-page-dialog.component.css']
})
export class NextPageDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { text: string, redirectUri: string }, private router: Router, private dialogRef: MatDialogRef<NextPageDialogComponent>) {
  }

  ngOnInit(): void {
  }

  redirect(): void {
    this.router.navigateByUrl(this.data.redirectUri)
    this.dialogRef.close();
  }

}
