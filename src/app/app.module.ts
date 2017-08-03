import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Contacts } from '@ionic-native/contacts';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';

import { MyApp } from './app.component';
import { GuardadosPage, HomePage, MapaPage, TabsPage } from '../pages/index.paginas';
import { HistorialProvider } from '../providers/historial/historial';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    MyApp,
    GuardadosPage,
    HomePage, 
    MapaPage, 
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_I2HnMrKUPTX961xNDYeIS8JzaxzvCgY'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GuardadosPage,
    HomePage, 
    MapaPage, 
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    Contacts,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider
  ]
})
export class AppModule {}
