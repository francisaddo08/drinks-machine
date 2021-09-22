import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private lemonteaurl = 'data/lemontea.json';
  private coffeeurl = 'data/coffee.json';
  private chocolateurl = 'data/chocolate.json';
  public coffeeRecipe: any[]= [];
  public lemonteaRecipe: any[]= [];
  public chocolateRecipe: any[]= [];
  //================================================================
  constructor( public http: HttpClient ) {
    this.getcoffeeRecipe().subscribe({
      next: data => {this.coffeeRecipe = data; console.log("coffee" + data)},
      error: err => {console.log(err)}
    });
    //================================================================================
    this.getChocolateRecipe().subscribe({
      next: data => {this.chocolateRecipe = data; console.log("chocolate" + data)},
      error: err => {console.log(err)}
    });
    //=================================call lemon tea data====================
    this.getLemonTeaRecipe().subscribe({
      next: data => {this.lemonteaRecipe = data; console.log("lemon tea" + data)},
      error: err => {console.log(err)}
    });

   }
   //-------------------------------------------------------------------------------
   getcoffeeRecipe() : Observable<any[]> {
    return this.http.get<any[]>(this.coffeeurl)
    .pipe(
      tap(coff => console.log("coffee recipe" + JSON.stringify(coff))), catchError(this.handleError)
    );
  }
  getChocolateRecipe() : Observable<any[]> {
    return this.http.get<any[]>(this.chocolateurl)
    .pipe(
      tap(chocolate => console.log("chocolate" + JSON.stringify(chocolate))), catchError(this.handleError)
    );
  }
  getLemonTeaRecipe() : Observable<any[]> {
    return this.http.get<any[]>(this.lemonteaurl)
    .pipe(
      tap(lemon => console.log("Lemon tea" + JSON.stringify(lemon))), catchError(this.handleError)
    );
  }

    // to handle errors from the http requset we create a method on the service useing HttpErrorRespose obj as a para
  private handleError(err: HttpErrorResponse) {
    let errorMessage = ``;
    if (err.error instanceof ErrorEvent) { //client side error, network connection or mishaps
      errorMessage = `An erreor happened: ${err.error.message} `
    } else {

      // Server side error,  server return db code or anything
      errorMessage = `Server return code: ${err.status}, error message is : ${err.message}`
    }
    console.log(errorMessage); // log to console
    return throwError(errorMessage);
  }

}
