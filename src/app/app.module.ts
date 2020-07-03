import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ComponentModule } from 'components';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentModule, DialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
