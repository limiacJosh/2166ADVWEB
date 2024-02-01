import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prelimexam';
  myColor = 'red';
  clientName = 'Joshua Ezekiel Limiac';
  clickCountLike=0
  clickCountDislike=0
  clickMeLike(){
    this.clickCountLike++;
  }
  clickMeDislike(){
    this.clickCountDislike++;
  }
  
}

