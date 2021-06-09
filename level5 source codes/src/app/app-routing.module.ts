import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DolphineComponent } from './dolphine/dolphine.component';
import { FishesComponent } from './fishes/fishes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharksComponent } from './sharks/sharks.component';

const routes: Routes = [
  {path: "fishes",component:FishesComponent},
  {path:"sharks",component:SharksComponent},
  {path:"dolphine",component:DolphineComponent},
  {path:"pagenotfound",component:PagenotfoundComponent},
  {path:'login', component:LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'reset-password', component: ResetPasswordComponent},
{path: 'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FishesComponent,SharksComponent,DolphineComponent,PagenotfoundComponent,LoginComponent,RegisterComponent,ResetPasswordComponent]
