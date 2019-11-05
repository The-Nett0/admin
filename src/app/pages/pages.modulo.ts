import { NgModule } from "@angular/core";

import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.modulo';
import { pagin_Ruta } from './pages.routes';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { IincrementadorComponent } from '../components/iincrementador/iincrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoComponent } from '../components/grafico/grafico.component';
import { CuentaConfigComponent } from './cuenta-config/cuenta-config.component';
import { PromesitasComponent } from './promesitas/promesitas.component';
import { FcrpmixComponent } from './fcrpmix/fcrpmix.component';


@NgModule({
    //declarar paginas referentes a PAGES:grfias1,proges y dashboard,Los compoenes esdtan enlas tres partes
    declarations:[
        PagesComponent,
        DashBoardComponent,
        ProgressComponent,
        Graficas1Component,
        IincrementadorComponent,
        GraficoComponent,
        CuentaConfigComponent,
        PromesitasComponent,
        FcrpmixComponent
    ] ,

    exports :[
        DashBoardComponent,
        ProgressComponent,
        Graficas1Component,
    

     
    

    ],
    imports:[
        SharedModule,
        pagin_Ruta,
        FormsModule,
        ChartsModule,
    
        
      

    ]
})

export class PagesModule {}