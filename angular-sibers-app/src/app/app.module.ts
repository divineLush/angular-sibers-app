import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpService } from './components/home/http-service';
import { ItemComponent } from './components/home/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { MoreComponent } from './components/more/more.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'more/:name', component: MoreComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    MoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
