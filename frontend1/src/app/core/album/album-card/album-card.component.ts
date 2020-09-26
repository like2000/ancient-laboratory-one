import {Component, Input, OnInit} from '@angular/core';
import {AlbumCard} from './album-card';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {

  @Input()
  albumCard: AlbumCard;

  constructor() {
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
