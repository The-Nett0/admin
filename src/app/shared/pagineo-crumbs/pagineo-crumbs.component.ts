import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-pagineo-crumbs',
  templateUrl: './pagineo-crumbs.component.html',
  styleUrls: ['./pagineo-crumbs.component.css']
})
export class PagineoCrumbsComponent implements OnInit {

  label:string="";

  private titulo:string=""
  constructor(private _Srouter: Router, public  _stitulo:Title , public _smeta:Meta ) {

   this.getDatitaRoute().subscribe((datofiltrado) => {
        console.log(datofiltrado);
        this.titulo = datofiltrado.titulo
         this._stitulo.setTitle(this.titulo)
          let metaTag:MetaDefinition ={
            name:'descripcion',
            content:this.titulo
          }

         this._smeta.updateTag(metaTag);
      })


  }

  ngOnInit() {
  }

  getDatitaRoute(){
     return this._Srouter.events.pipe(filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data )  )

     
     
  }

}
