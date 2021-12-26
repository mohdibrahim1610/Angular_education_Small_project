import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { JoinowComponent } from './joinow/joinow.component';
import { AboutComponent } from './about/about.component';
import { KeezeeComponent } from './keezee/keezee.component';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { HttpClientModule } from '@angular/common/http';
// for Router import:
// import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    JoinowComponent,
    AboutComponent,
    KeezeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
