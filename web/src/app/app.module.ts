import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FromPersonComponent } from './from-person/from-person.component';
import { TablaDataComponent } from './tabla-data/tabla-data.component';
import { FromDataComponent } from './from-data/from-data.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FromPersonComponent,
    TablaDataComponent,
    FromDataComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([{
      path: 'home',
      component: HomeComponent
    },{
      path: 'panel/:panel',
      component: TablaDataComponent
    },{
      path: 'panel/:panel/:id',
      component: FromDataComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
