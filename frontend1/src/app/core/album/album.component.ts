import {Component, OnInit} from '@angular/core';
import {AlbumCardService} from './album-card/album-card.service';
import {AlbumCard} from './album-card/album-card';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albumCardsList: Array<AlbumCard>;

  constructor(private service: AlbumCardService, private dialog: MatDialog) {
    this.albumCardsList = [];
  }

  ngOnInit(): void {
    this.getData();
  }

  // toggleSelected(i): void {
  //   this.albumCards[i].active = !this.albumCards[i].active;
  //   // for (let k = 0; k < 6; k++) {
  //   //   this.selected[k] = false;
  //   // }
  //   // this.selected[i] = true;
  // }

  addData(): void {
    // const dialogRef = this.dialog.open(AlbumDialogComponent, {
    //   width: '300px',
    //   data: {id: 1, url: '1234.png', description: 'Hello man!'}
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Closed the dialog - result: ' + result);
    //   // this.url = result;
    // });

    this.service.addCards().subscribe(
      (response) => {
        this.albumCardsList = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getData(): void {
    this.service.getCards().subscribe(
      (response) => {
        this.albumCardsList = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteData(): void {
    this.service.deleteCards().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
