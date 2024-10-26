import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToList() {
    this.router.navigate(['/mes-contacts']);
  }

}
