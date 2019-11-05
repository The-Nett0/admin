import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index'

@Component({
  selector: 'app-cuenta-config',
  templateUrl: './cuenta-config.component.html',
  styleUrls: ['./cuenta-config.component.css']
})
export class CuentaConfigComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,
    public _sajustes: SettingsService) {


  }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(temita: string, link: any) {
    this.aplicarWorko(link); //pal wworking
    this._sajustes.aplicalo(temita);
  }

  aplicarWorko(link: any) {
    let selectorcitos: any = document.getElementsByClassName('selector');

    for (let ref of selectorcitos) {
      ref.classList.remove('working');
    }

    link.classList.add('working') //ESTA N.O. ME LA SABIA, SEGURO Q TU TAMPOKO.

  }

  colocarCheck() {

    let tema = this._sajustes.ajustex.tema;
    console.log(tema)
    let selectorcitos: any = document.getElementsByClassName('selector');
    for (let ref of selectorcitos) {
      if (ref.getAttribute('data-theme') == tema ) { // si el recorrido (tema) es igual a el (tema) traido del serivio ponerle el working
        ref.classList.add('working');
        break;
      }

    }
  }


}//fin del compo
