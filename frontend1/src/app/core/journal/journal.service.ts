import {Injectable} from '@angular/core';
import {API_URL} from '../../env';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  url: string = API_URL + '/journal';

  constructor(private http: HttpClient) {
  }

  getMonth(): Observable<any> {
    return this.http.get<any>(this.url + '/month');
  }
}
