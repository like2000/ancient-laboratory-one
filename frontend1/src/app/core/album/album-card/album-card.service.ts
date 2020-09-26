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
    return this.http.get<AlbumCard[]>(this.url + '/get');
  }

  deleteCards() {
    return this.http.delete<AlbumCard[]>(this.url + '/delete');
  }

  addCards() {
    const card: AlbumCard = new AlbumCard();

    return this.http.post<AlbumCard[]>(this.url + '/add', card);
  }
}
