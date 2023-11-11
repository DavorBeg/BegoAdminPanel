import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hr_HR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hr from '@angular/common/locales/hr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { AdminModule} from './admin-module/admin.module';

registerLocaleData(hr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    AdminModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: hr_HR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
