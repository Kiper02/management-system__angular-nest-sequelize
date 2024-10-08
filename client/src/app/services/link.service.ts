import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ILink } from '../interfaces/link/link';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }

  generateLink(id: number){
    return this.http.post<ILink>(`${environment.apiUrl}/link`, {id})
  }

  getLink(id: string) {
    return this.http.get<ILink>(`${environment.apiUrl}/link/${id}`)
  }
}
