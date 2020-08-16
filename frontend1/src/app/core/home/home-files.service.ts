import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../env';

@Injectable({
  providedIn: 'root'
})
export class HomeFilesService {

  constructor(private http: HttpClient) {
  }

  sendFiles(files) {
    const formData: FormData = new FormData();
    formData.append('file', files[0], files[0].name);
    console.log(formData);

    return this.http.post(API_URL + '/files/upload', formData);
  }
}
