import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './person.list.component.html'
})
export class PersonListComponent implements OnInit {
  persons: any;
  ngOnInit() {
    this.persons = [
      { "name": "Chandan", "Country": "India" },
      { "name": "Ajeet", "Country": "Canada" },
      { "name": "Rahul", "Country": "United Kingdom" }
    ];
  }
}