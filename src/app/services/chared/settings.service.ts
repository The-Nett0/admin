import { Injectable, ApplicationModule, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
ajustex :Ajustess = {
  temillaURL:'assets/css/colors/red-dark.css',
  tema:'default'
}


  constructor(  @Inject(DOCUMENT)  private _document ) {
    this.cargarajustes(); //algo un poco indigerible , aque si! xd
   }
guardarAjustement(){
  
  
  localStorage.setItem('ajustesitos',JSON.stringify(this.ajustex));
}

cargarajustes(){
  if(localStorage.getItem('ajustesitos')){
   
    
    this.ajustex =  JSON.parse( localStorage.getItem('ajustesitos')) ;
    this.aplicalo(this.ajustex.tema)
  }else{
    
    this.aplicalo(this.ajustex.tema)
  }


}

aplicalo(temon : string){
  
  let url = `assets/css/colors/${temon}.css`
  this._document.getElementById('tema_index').setAttribute('href',url)
  this.ajustex.tema = temon;
  this.ajustex.temillaURL = url;
  this.guardarAjustement();
 } 


}//fin del compoente

interface Ajustess {
  temillaURL:string;
  tema:string;
}