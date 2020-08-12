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

  }

  ngOnInit(): void {
  }
}
