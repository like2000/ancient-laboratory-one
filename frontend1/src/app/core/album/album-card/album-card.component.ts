import {Component, Input, OnInit} from '@angular/core';
import {AlbumCard} from './album-card';
import {AlbumCardService} from './album-card.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {

  @Input()
  albumCard: AlbumCard;

  constructor() {
    this.albumCard = new AlbumCard(123, '123.png', 'Henry',
      '2020', '12:00', true, 'comment', 'description');
  }

  ngOnInit(): void {
  }

  setCard(albumCard: AlbumCard): AlbumCardComponent {
    this.albumCard = albumCard;
    return this;
  }

  toggleSelected(): void {
    this.albumCard.active = !this.albumCard.active;
  }
}
