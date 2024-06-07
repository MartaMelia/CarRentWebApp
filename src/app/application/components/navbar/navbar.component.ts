import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../user/login/login.component';
import { RegisterComponent } from '../../../user/register/register.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isLoggedIn!: boolean;
  @ViewChild('menu') menu!: ElementRef;
  fullName: string = '';

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe((status) => {
      this.isLoggedIn = status;

      if (this.isLoggedIn) {
        this.fullName = this.authService.getUsername();
      }
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }

  openRegisterDialog() {
    this.dialog.open(RegisterComponent);
  }

  landing() {
    this.router.navigate(['/']);
  }

  menuToggle() {
    const toggleMenu = this.menu.nativeElement;
    toggleMenu.classList.toggle('active');
  }

  logout() {
    this.authService.clearSession();
  }
}
