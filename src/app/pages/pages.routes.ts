import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CuentaConfigComponent } from './cuenta-config/cuenta-config.component';
import { PromesitasComponent } from './promesitas/promesitas.component';
import { FcrpmixComponent } from './fcrpmix/fcrpmix.component';

const pageRutas : Routes = [
{
    path:'',
    component:PagesComponent,
    children:[
     { path:'dashboard', component:DashBoardComponent, data:{ titulo:'DashBoard'} },
     { path:'progress', component:ProgressComponent, data:{ titulo:'Barra de Progreso'} },
     { path:'graficas1',component:Graficas1Component, data:{ titulo:' Mira pe'}  },
     { path:'promesas',component:PromesitasComponent, data:{ titulo:'Promesas y sas'} },
     { path:'fcrpmix',component:FcrpmixComponent, data:{ titulo:'fcrpmix'} },
     { path:'configuracion', component:CuentaConfigComponent, data:{ titulo:'configuracion del Tema'}  },
   { path:'', redirectTo:'/dashboard',pathMatch:'full' },
 
     ]
}
]

//Router otlet que esta dentro de otro router outlett papa
export const  pagin_Ruta = RouterModule.forChild(pageRutas);