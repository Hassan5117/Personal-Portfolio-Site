import { Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ExtraCurricularsComponent } from './pages/extra-curriculars/extra-curriculars.component';
import { LeadershipComponent } from './pages/leadership/leadership.component';
import { PersonalDevelopmentComponent } from './pages/personal-development/personal-development.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';

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
