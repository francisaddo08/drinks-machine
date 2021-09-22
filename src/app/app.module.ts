import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { LemonTeaComponent } from './lemon-tea/lemon-tea.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    LemonTeaComponent,
    CoffeeComponent,
    ChocolateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'lemon-tea', component: LemonTeaComponent},
      {path: 'coffee', component: CoffeeComponent},
      {path: 'chocolate', component: ChocolateComponent},
    ]),
    NgbModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
