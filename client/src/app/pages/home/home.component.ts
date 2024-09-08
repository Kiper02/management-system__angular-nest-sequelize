import { Component, OnInit } from '@angular/core';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header.component';
import { jwtDecode } from 'jwt-decode';
import { ICustomJwt } from '../../interfaces/auth/custom-jwt';
import { LinkService } from '../../services/link.service';
import { ILink } from '../../interfaces/link/link';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { IOrders } from '../../interfaces/payment/orders';
import { CommonModule } from '@angular/common';
import { IPayment } from '../../interfaces/payment/payment';
import { StatisticsService } from '../../services/statistics.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileHeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  id: number = 0;
  link: string = '';
  orders: IOrders[] = [];
  payload: IPayment | null = null;
  controlAmount: FormControl;
  statiscticsByUser: number = 0;
  statisticsAll: number = 0;

  constructor(
    private linkService: LinkService,
    private paymentService: PaymentService,
    private statisticsService: StatisticsService
  ) {
    this.controlAmount = new FormControl('');
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decode = jwtDecode<ICustomJwt>(token);
      this.id = decode.id;
    }
    this.getLink();
    this.getOrders();
    this.getStatisticsByUser();
    this.getStatisticsAll();
  }

  getLink() {
    this.linkService.getLink(String(this.id)).subscribe((data: ILink) => {
      this.link = `${environment.clientUrl}/registration/${data.link}`;
    });
  }

  generateLink() {
    this.linkService.generateLink(this.id).subscribe((data: ILink) => {
      this.link = data.link;
    });
  }

  createOrder() {
    this.payload = {
      userId: this.id,
      amount: this.controlAmount.value,
    };
    if (this.controlAmount.valid) {
      this.paymentService
        .createOrder(this.payload)
        .subscribe((data: IOrders) => {
          this.orders = [...this.orders, data];
        });
    }
  }

  getOrders() {
    this.paymentService
      .getOrders(String(this.id))
      .subscribe((data: IOrders[]) => {
        this.orders = data;
      });
  }

  getStatisticsAll() {
    this.statisticsService.getAll().subscribe(data => {
      this.statisticsAll = data;
    })
  }

  getStatisticsByUser() {
    this.statisticsService.getByUser(this.id).subscribe(data => {
      this.statiscticsByUser = data;
    })
  }
}
