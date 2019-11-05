import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


const routes: Routes = [
//  {
//    path:'',
//    component:PagesComponent,
//    children:[
//     { path:'progess', component:ProgressComponent},
//     { path:'graficas1', component:Graficas1Component},
//     { path:'dashboard',component:DashBoardComponent   },
//   { path:'', redirectTo:'/dashboard',pathMatch:'full' },

//   ]
// },
{
  path:'login',
  component:LoginComponent,
},
{
  path:'register',
  component:RegisterComponent

},



{
  path:'**',
  component:NotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const APP_Routes = RouterModule.forRoot( routes , {useHash:true})