import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutMeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-portfolio-app';
}
