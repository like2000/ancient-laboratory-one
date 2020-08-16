import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HomeFilesService} from '../home-files.service';

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

  constructor(private service: HomeFilesService,
              public dialogRef: MatDialogRef<HomeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: HomeDialogData) {
  }

  private fileData: any;
  @ViewChild('fileInput') fileInput;

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

  uploadFile() {
    const files: FileList = this.fileInput.nativeElement.files;
    if (files.length === 0) {
      return;
    }
    return this.service.sendFiles(files).subscribe(
      (response) => {
        console.log(response);
      },
      (error => {
        console.log(error);
      }));
  }

  close(): void {
    this.dialogRef.close();
  }
}
