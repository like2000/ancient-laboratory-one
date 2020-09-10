import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../env';
import {AlbumCards} from './album-cards';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumCardsService {

  url: string = API_URL + '/chronicles';

  constructor(private http: HttpClient) {
  }

  getCards(): Observable<AlbumCards[]> {
    const response: Observable<AlbumCards[]> = this.http.get<AlbumCards[]>(this.url + '/get');

    return this.http.get<AlbumCards[]>(this.url + '/get');
  }

  deleteCards() {
    return this.http.delete<AlbumCards[]>(this.url + '/delete');
  }

  addCards() {
    const card: AlbumCards = new AlbumCards(1, '1234.jpg', 'johanni', '2020', '12:00',
      false, 'a new comment', 'some text');

    return this.http.post<AlbumCards[]>(this.url + '/add', card);
  }
}
