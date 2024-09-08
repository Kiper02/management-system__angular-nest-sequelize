import { Component, OnInit } from '@angular/core';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header.component';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  id: number = 0;
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decode = jwtDecode(token);
      console.log(decode);
      // this.id = decode.id;
    }
  }
  generateLink() {}
}
