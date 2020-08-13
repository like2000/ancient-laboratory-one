import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../env';
import {AlbumCards} from './album-cards';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumCardsService implements OnInit {

  constructor(private http: HttpClient) {
  }

  getCards(): Observable<AlbumCards[]> {
    return this.http.get<AlbumCards[]>(API_URL + '/chronicles/get');
  }

  deleteCards() {

  }

  addCards() {
    const card: AlbumCards = new AlbumCards(1, '1234.jpg', 'johanni', 'a comment', 'some text');

    this.http.post<AlbumCards>(API_URL + '/chronicles/add', card).subscribe();
  }

  ngOnInit(): void {
  }
}
