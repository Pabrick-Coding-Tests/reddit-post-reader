import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { ListElementComponent } from './components/list-element/list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    ListElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
