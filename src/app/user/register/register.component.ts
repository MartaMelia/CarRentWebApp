import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from '../../shared/models/auth/register.model';
import { AuthService } from '../../shared/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private dialogRef: MatDialogRef<RegisterComponent>
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  register() {
    if (!this.form.valid) return;

    var model = new RegisterModel(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.email,
      this.form.value.phoneNumber,
      this.form.value.password,
      this.form.value.confirmPassword
    );

    this._authService.register(model).subscribe((result) => {
      if (result.isSuccess) {
        this.dialogRef.close();
      }
    });
  }
}
