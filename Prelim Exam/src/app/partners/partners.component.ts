import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  partners = 'Partners who help me to do this social experiment.';
  showText: boolean = false;

toggleText() {
  this.showText = !this.showText;
}

staff = [ 
  { Name: 'Rymbrent',  age: '35', role: 'Programmer' },   
  { Name: 'Louis',  age: '29', role: 'Programmer' }, 
  { Name: 'Macam',  age: '49', role: 'Web Design' }, 
  { Name: 'Chrisjohn', age: '60', role: 'Web Design' }, 
  { Name: 'Reuben', age: '16', role: 'Wireframe' }, 
  { Name: 'Patrick',  age: '69', role: 'Flowchart' } 
  ];

  roles = 'Click to see their ages and roles.';
}
