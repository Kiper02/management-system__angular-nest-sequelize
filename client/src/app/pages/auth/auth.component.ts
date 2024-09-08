import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IAuth } from '../../interfaces/auth/auth';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  url: string = '';
  currentFormGroup: FormGroup = new FormGroup({});
  payload: IAuth | null = null
  registrationForm: FormGroup;
  loginForm: FormGroup;

  constructor(
    private router: Router,
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
    this.loginForm = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.url = this.router.url.split('/').pop() || '';
    this.setFormGroup();
  }
  setFormGroup(): void {
    this.currentFormGroup = this.url === 'registration' ? this.registrationForm : this.loginForm;
  }

  



  registration() {
    if(this.registrationForm.valid) {
      this.authService.registration(this.registrationForm.value)
    }
  }

  login() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
    }
  }
}
