import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
showText: boolean = false;

toggleText() {
  this.showText = !this.showText;
}

staff = [ 
  { firstName: 'Joshua', lastName: 'Limiac', email: 'joshua4@test.com', role: 'Bunso' },   
  { firstName: 'Kyle', lastName: 'Limiac', email: 'kyle3@test.com', role: 'Second Bunso' }, 
  { firstName: 'Dale', lastName: 'Limiac', email: 'dale2@test.com', role: 'Second Panganay' }, 
  { firstName: 'Marc', lastName: 'Limiac', email: 'marc1@test.com', role: 'Panganay' }, 
  { firstName: 'Josephine', lastName: 'Limiac', email: 'josephine@test.com', role: 'Nanay' }, 
  { firstName: 'Froilan', lastName: 'Limiac', email: 'froilan@test.com', role: 'Tatay' } 
  ];

}
