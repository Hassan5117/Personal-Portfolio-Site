import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CoursesComponent } from './courses/courses.component';
import { ExtraCurricularsComponent } from './extra-curriculars/extra-curriculars.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { PersonalDevelopmentComponent } from './personal-development/personal-development.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

export const routes: Routes = [
    {path: '', component: AboutMeComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'extra-curriculars', component: ExtraCurricularsComponent},
    {path: 'leadership', component: LeadershipComponent},
    {path: 'personal-development', component: PersonalDevelopmentComponent},
    {path: 'work-experience', component: WorkExperienceComponent},
    // {path: 'products/:id', component: ProductdetailsComponent},
    // {path: '**', component: NotFoundComponent}
    //COME BACK TO THISSSS!!!!!



];
