import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewalltrainsComponent } from './viewalltrains/viewalltrains.component';
import { FormsModule } from '@angular/forms';
import { ViewalltrainComponent } from './viewalltrain/viewalltrain.component';

const routes:Routes=[
  {
path:'',component:ViewalltrainsComponent
  },
  {
path:'1',component:ViewalltrainComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewalltrainsComponent,
    ViewalltrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
RouterModule.forRoot(routes),
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
