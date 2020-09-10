import {Component, OnInit} from '@angular/core';
import {AlbumCardsService} from './album-cards.service';
import {AlbumCards} from './album-cards';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albumCards: Array<AlbumCards>;
  selected: Array<boolean>;
  range: Array<number>;

  constructor(private service: AlbumCardsService) {
    this.albumCards = [];

    // for (let i = 0; i < 5; i++) {
    //   this.getData();
    // }

    // this.range = Array.from(this.albumCards.keys());
    // this.selected = Array.apply(null, new Array(this.range.length)).map(() => false);

    // console.log(this.range);
    // console.log(this.selected);
    // console.log(this.albumCards);
  }


  ngOnInit(): void {
  }


  toggleSelected(i): void {
    this.albumCards[i].active = !this.albumCards[i].active;
    this.selected[i] = !this.selected[i];
    // for (let k = 0; k < 6; k++) {
    //   this.selected[k] = false;
    // }
    // this.selected[i] = true;
  }

  addData(): void {
    this.service.addCards().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    this.getData();
  }

  getData(): void {
    this.service.getCards().subscribe(
      (response) => {
        // this.albumCards = this.albumCards.concat(response);
        // console.log(this.albumCards);
        this.albumCards = response;
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
