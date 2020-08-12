import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor() {
    this.selected = [false, false, false, false, false];
    this.range = [1, 2, 3, 4, 5];
  }

  selected: Array<boolean>;
  range: Array<number>;


  ngOnInit(): void {
  }


  toggleSelected(i): void {
    // this.selected[i] = !this.selected[i];
    for (let k = 0; k < 6; k++) {
      this.selected[k] = false;
    }
    this.selected[i] = true;
    console.log('Clicked - state ' + this.selected[i]);
  }
}
