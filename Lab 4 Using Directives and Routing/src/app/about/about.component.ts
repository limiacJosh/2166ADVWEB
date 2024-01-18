import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  position = "Student"
  work_experience = 0
  email = "jtlimiac1@student.hau.edu.ph"
  website = "www.example.com"
  phone = "507-541-4567"

  imageUrl:string="assets/limiac.jpg";
  imageW: number = 300;
  imageH: number = 300;
  
}
