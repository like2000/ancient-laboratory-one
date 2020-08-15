import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface HomeDialogData {
  id: number;
  url: string;
  description: string;
}

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss']
})
export class HomeDialogComponent implements OnInit {
  private fileData: any;

  constructor(public dialogRef: MatDialogRef<HomeDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: HomeDialogData) {
  }

  ngOnInit(): void {
  }

  readDialog() {
    console.log(this.data);
  }

  fileChanged(fileChangedEvent): void {
    this.fileData = fileChangedEvent.target.files[0];
    this.data.url = this.fileData.name;
    console.log(this.fileData);
    console.log(this.data);
  }

  close(): void {
    this.dialogRef.close();
  }
}
