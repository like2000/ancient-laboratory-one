import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private counter: number;

  // private snackBar: MatSnackBar;

  constructor(private dialog: MatDialog) {
    this.counter = 0;
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(HomeDialogComponent);
  }

  // openSnackbar(): void {
  //   this.counter += 1;
  //   if (this.counter > 10) {
  //     this.snackBar.open(`Oh man! You're nuts really!`, 'close', {duration: 2000});
  //   } else {
  //     this.snackBar.open(`Hello! You clicked me ${this.counter} times`, 'open', {duration: 2000});
  //   }
}

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog/home-dialog.component.html',
})
export class HomeDialogComponent implements OnInit {
  ngOnInit(): void {
  }
}
