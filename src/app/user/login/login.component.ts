import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginModel } from '../../shared/models/auth/login.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitLogin() {
    if (!this.loginForm.valid) return;
    var model: LoginModel = new LoginModel(
      this.loginForm.value.phoneNumber,
      this.loginForm.value.password
    );

    this.authService.login(model).subscribe((result) => {
      if (result) {
        this.authService.jwtToSession(result);
        this.dialogRef.close(true);
      }
    });
  }
}
