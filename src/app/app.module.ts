import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AppComponent } from './app.component';
import { CardTotalComponent } from './card-total/card-total.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    CardTotalComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    NzIconModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
