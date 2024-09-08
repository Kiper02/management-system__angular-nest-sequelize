import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IAuth } from '../../interfaces/auth/auth';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-registration-link',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './registration-link.component.html',
  styleUrl: './registration-link.component.scss'
})
export class RegistrationLinkComponent {
  payload: IAuth | null = null
  registrationForm: FormGroup;
  id: number = 0

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.registrationForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      patronymic: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  



  registrationByInvtitation() {
    if(this.registrationForm.valid) {
      this.authService.registrationByInvtitation(this.registrationForm.value)
    }
  }
}
