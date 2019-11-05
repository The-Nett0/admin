import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesModule } from './pages/pages.modulo';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PagineoCrumbsComponent } from './shared/pagineo-crumbs/pagineo-crumbs.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';
import { SharedModule } from './shared/shared.modulo';
import { AppRoutingModule } from './app-routing.module';
//import { APP_Routes } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ServicioMouuModule } from './services/servicio-mouu.module';



   

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    // HeaderComponent,
    // SidebarComponent,
    // PagineoCrumbsComponent,
     
    RegisterComponent,
    
    
    
    
    
    

    
  ],
  imports: [
    BrowserModule,
    //APP_Routes,
    PagesModule,
    AppRoutingModule,
    FormsModule,
    ServicioMouuModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
