import { NgModule } from "@angular/core";
import { AppComponent } from '../app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagineoCrumbsComponent } from './pagineo-crumbs/pagineo-crumbs.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [

        HeaderComponent,
        SidebarComponent,
        PagineoCrumbsComponent

    ],
    exports:[
        HeaderComponent,
        SidebarComponent,
        PagineoCrumbsComponent

    ],
    imports:[
      CommonModule,
     RouterModule
    ],
    providers:[],
    bootstrap:[AppComponent]

})

export class SharedModule{}