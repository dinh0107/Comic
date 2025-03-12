import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypeComicService {

  constructor(private http: HttpClient) {}

  getType(): Observable<any> {
    return this.http.get<any>('https://otruyenapi.com/v1/api/the-loai');
  }
}
