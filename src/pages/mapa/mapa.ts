import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  lat:number;
  lng:number;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController) {
    //this.lat = -31.59202070000001;
    //this.lng = -64.34765070000003;

    let coordsArray = this.navParams.get("coords").split(",");

    this.lat = Number(coordsArray[0].replace("geo:",""));
    this.lng = Number(coordsArray[1]);

    console.log( this.navParams.get("coords") );
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

}
