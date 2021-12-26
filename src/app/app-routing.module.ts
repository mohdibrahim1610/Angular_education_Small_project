import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { JoinowComponent } from './joinow/joinow.component';
import { KeezeeComponent } from './keezee/keezee.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'course', component:CourseComponent},
  {path:'joinow', component:JoinowComponent },
  {path:'about', component:AboutComponent},
  {path :'keezee',component:KeezeeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
