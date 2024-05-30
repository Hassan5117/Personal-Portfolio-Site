import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  // constructor(private router: Router) {}

  // goToCourses() {
  //   console.log('Navigating to Courses + Skills Learned');

  //   this.router.navigate(['courses'])
  // }
}
