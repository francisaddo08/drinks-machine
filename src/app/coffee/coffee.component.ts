import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
 recipe: any = ["Boil some water",
 "Brew the coffee grounds",
 "Pour coffee in the cup",
 "Add sugar and milk"
 ];
 public coffeeRe: any[] = [];
  constructor( public data:DataService) {

   }

  ngOnInit() {

  
  }

}
