import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IPayment } from '../interfaces/payment/payment';
import { Observable } from 'rxjs';
import { IOrders } from '../interfaces/payment/orders';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  createOrder(dto: IPayment):Observable<IOrders> {
    console.log(dto);
    return this.http.post<IOrders>(`${environment.apiUrl}/payment`, dto)
  }

  getOrders(id: string):Observable<IOrders[]> {
    return this.http.get<IOrders[]>(`${environment.apiUrl}/payment/${id}`)
  }
}
