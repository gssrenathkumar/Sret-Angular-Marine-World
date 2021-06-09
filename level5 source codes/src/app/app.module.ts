import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CoursesComponent } from './courses/courses.component';
import { ResultsComponent } from './results/results.component';
import { NavDropComponent } from './nav-drop/nav-drop.component';
import { RoutingComponent } from './routing/routing.component';
import { IntroComponent } from './intro/intro.component';
import { GridSytemComponent } from './grid-sytem/grid-sytem.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { StructComponent } from './struct/struct.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BindingComponent } from './binding/binding.component';
import { BindingsComponent } from './bindings/bindings.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ReuseComponent } from './reuse/reuse.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ButtonregisterComponent } from './buttonregister/buttonregister.component';
import { ApiComponent } from './api/api.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    CoursesComponent,
    ResultsComponent,
    NavDropComponent,
  
    routingComponents,
       RoutingComponent,
       IntroComponent,
       GridSytemComponent,
       PagenotfoundComponent,
       StructuralDirectiveComponent,
       StructComponent,
       CarouselComponent,
       BindingComponent,
       BindingsComponent,
       UserComponent,
       FooterComponent,
       HeaderComponent,
       ReuseComponent,
       LoginComponent,
       RegisterComponent,
       ResetPasswordComponent,
       HomeComponent,
       LoginPageComponent,
       ButtonregisterComponent,
       ApiComponent

       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
