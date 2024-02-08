import { Component, OnInit } from '@angular/core';
import { Observable, map, interval, Observer } from 'rxjs';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterm';

  name = 'Joshua Ezekiel Limiac';
  section = 'WD - 301';
  course= 'Information Technology';
  time$: Observable<Date>;
  presentDate = new Date();
  birthdate = new Date(2003, 9, 9);

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  data: Object = {lname: 'Limiac', firstname: 'Joshua',};
  haha: Object = {course: 'IT', age: '20'};
  
  constructor(){
    this.time$ = interval(1000).pipe(map(()=> new Date()))
  }
  price: number = 20000;
  fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  decimalNum3: number = 7.123456;
  a: number = 0.259;
  b: number = 1.3495;
  c: number = 69.420;
  ngOnInit(){
  
    
  }
  

  

}

