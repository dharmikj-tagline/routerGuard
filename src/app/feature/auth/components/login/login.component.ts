import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder,
    private router : Router,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }else{
      this.authService.login(this.loginForm.value).subscribe((login : any) => {
        if(login){
          localStorage.setItem('email',login.email)
          localStorage.setItem('password',login.password)
          localStorage.setItem('role',login.role)
          this.router.navigate(['/home']);
        }
      })
    }
  }
}
