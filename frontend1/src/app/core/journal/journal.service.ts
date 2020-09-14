import {Injectable, OnInit} from '@angular/core';
import {API_URL} from '../../env';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JournalModel} from './journal-model';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  url: string = API_URL + '/journal';

  // url: string = API_URL + '/chronicles';

  constructor(private http: HttpClient) {
  }

  // getMonth(): JournalModel {
  //   return new JournalModel(100, 'Hello!');
  // }

  getMonth(): Observable<any> {
    // return this.http.get<AlbumCard[]>(this.url + '/get');
    return this.http.get<any>(this.url + '/month');
  }
}
