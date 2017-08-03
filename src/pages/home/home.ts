import { Component } from '@angular/core';
//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//componentes
import { ToastController, Platform } from 'ionic-angular';

import { HistorialProvider } from "../../providers/historial/historial";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( private barcodeScanner: BarcodeScanner, 
               private toastCtrl: ToastController, 
               private platform: Platform,
               private _historialService:HistorialProvider ) {

  }

  scan(){
    console.log("Realizando scan...");
    if( !this.platform.is('cordova') ){
      //this._historialService.agregar_historial("http://google.com");
      //this._historialService.agregar_historial("geo:-31.59202070000001,-64.34765070000003");
      //this._historialService.agregar_historial( `BEGIN:VCARD
//VERSION:2.1
//N:Kent;Clark
//FN:Clark Kent
//ORG:
//TEL;HOME;VOICE:12345
//TEL;TYPE=cell:67890
//ADR;TYPE=work:;;;
//EMAIL:clark@superman.com
//END:VCARD` );
      this._historialService.agregar_historial('MATMSG:TO:ia.corral94@gmail.com;SUB:Hola Mundo;BODY:Saludos Alex')
      return;
    }
    this.barcodeScanner.scan().then((barcodeData) => {
    // Success! Barcode data is here
    console.log("text: ",barcodeData.text);
    console.log("format: ",barcodeData.format);
    console.log("cancelled: ",barcodeData.cancelled);

    if(!barcodeData.cancelled && barcodeData.text != null){
      this._historialService.agregar_historial( barcodeData.text );
    }

    }, (err) => {
        // An error occurred
        console.error("Error: ", err);
        this.presentar_toast("Error: "+err);
    });
  }

  presentar_toast( mensaje:string ){
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
