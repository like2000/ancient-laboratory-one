import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HomeDialogComponent} from './home-dialog/home-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(HomeDialogComponent);
  }
}
