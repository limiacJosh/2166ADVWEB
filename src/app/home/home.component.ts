import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageUrl:string="assets/limiac.jpg";
  imageWidth: number = 200;
  imageHeight: number = 1000;
}
