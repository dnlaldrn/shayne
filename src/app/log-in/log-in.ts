import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Home } from '../home/home';


@Component({
  selector: 'app-birthday-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class BirthdayLoginComponent {
  birthdayInput: string = '';
  validBirthday: string = '2025-10-23';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.birthdayInput === this.validBirthday) {
      this.router.navigate(['/home']);
      alert('Welcomee!!');
    } else {
      alert('Invalid birthday! Please try again.');
    }
  }
}
