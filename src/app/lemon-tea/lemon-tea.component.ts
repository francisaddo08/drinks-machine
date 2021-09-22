import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lemon-tea',
  templateUrl: './lemon-tea.component.html',
  styleUrls: ['./lemon-tea.component.css']
})
export class LemonTeaComponent implements OnInit {
//recipe: any = ["Boil some water",
//"Steep the water in the tea",
//"Pour tea in the cup",
//"Add lemon"]
  constructor(public data:DataService) { }

  ngOnInit(): void {
  }

}
