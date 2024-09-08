import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  getAll():Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/user/statistics`)
  }

  getByUser(id: number):Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/user/statistics/${id}`)
  }
}
