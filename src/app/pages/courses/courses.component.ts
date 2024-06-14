import { Component } from '@angular/core';
import { PageItemComponent } from '../../components/page-item/page-item.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [PageItemComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

}
