import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../../env';
import {AlbumCard} from './album-card';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumCardService {

  url: string = API_URL + '/chronicles';

  constructor(private http: HttpClient) {
  }

  getCards(): Observable<AlbumCard[]> {
    const response: Observable<AlbumCard[]> = this.http.get<AlbumCard[]>(this.url + '/get');

    return this.http.get<AlbumCard[]>(this.url + '/get');
  }

  deleteCards() {
    return this.http.delete<AlbumCard[]>(this.url + '/delete');
  }

  addCards() {
    const card: AlbumCard = new AlbumCard(1, '1234.jpg', 'johanni', '2020', '12:00',
      false, 'a new comment', 'some text');

    return this.http.post<AlbumCard[]>(this.url + '/add', card);
  }
}
