import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HomeDialogComponent} from './home-dialog/home-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id: number;
  url: string;
  description: string;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      width: '300px',
      data: {id: 1, url: '1234.png', description: 'Hello man!'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed the dialog - result: ' + result);
      this.url = result;
    });
  }
}
