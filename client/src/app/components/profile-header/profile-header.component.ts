import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  
  constructor(private authService: AuthService) {}
  
  logout() {
    this.authService.logut()
  }
}
