import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chocolate',
  templateUrl: './chocolate.component.html',
  styleUrls: ['./chocolate.component.css']
})
export class ChocolateComponent implements OnInit {
//recipe: any = ["Boil some water",
//"Add drinking chocolate powder to the water",
//"Pour chocolate in the cup"
//];
  constructor(public data:DataService) { }

  ngOnInit(): void {
  }

}
