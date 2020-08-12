import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../../env';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor() {// private http: HttpClient) {
    this.selected = [false, false, false, false, false];
    this.range = [1, 2, 3, 4, 5];
  }

  selected: Array<boolean>;
  range: Array<number>;

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  ngOnInit(): void {
  }

  // // GET list of public, future events
  // getCards(): Observable<Card[]> {
  //   return this.http
  //     .get(`${API_URL}/exams`)//.catch(AlbumComponent._handleError);
  // }

  toggleSelected(i): void {
    this.selected[i] = !this.selected[i];
    console.log('Clicked - state ' + this.selected[i]);
  }

}
