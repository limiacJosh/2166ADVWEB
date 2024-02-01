import { Component } from '@angular/core';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent {
  Firstname: String = '';
  Lastname: String = '';
  Email: String = '';
  School: String = '';
  Join = 'Fill the form below';

  clearForm() {
    this.Firstname = '';
    this.Lastname = '';
    this.Email = '';
    this.School = '';
}
}
