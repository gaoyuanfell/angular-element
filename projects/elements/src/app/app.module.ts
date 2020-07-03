import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap, ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { componentsList } from 'components'; // ComponentModule,
import { AppComponent, TestComponent } from './app.compoent';

@NgModule({
  imports: [BrowserModule, OverlayModule], //PortalModule ComponentModule
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  // private toLowerLine(str: string) {
  //   let temp = str.replace(/[A-Z]/g, (match) => {
  //     return '-' + match.toLowerCase();
  //   });
  //   if (temp.slice(0, 1) === '-') {
  //     temp = temp.slice(1);
  //   }
  //   return temp;
  // }

  ngDoBootstrap(appRef: ApplicationRef) {
    console.info(componentsList);
    // componentsList.forEach((c) => {
    //   let selector =
    //     c.selector ||
    //     `bf-${this.toLowerLine(c.name).replace('-component', '')}`;
    //   const element = createCustomElement(c, {
    //     injector: this.injector,
    //   });
    //   customElements.define(selector, element);
    // });

    appRef.bootstrap(AppComponent);
  }
}
