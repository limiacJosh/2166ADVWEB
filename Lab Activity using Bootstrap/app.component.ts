import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JETL BOOKSTORE';
  book1 = 'Harry Potter and the Half-Blood Prince';
  book2 = 'She: A History of Adventure';
  book3 = 'The Hobbit';
  book4 = 'Happy Potter and the Philosophers Stone';
  book5 = 'The Little Prince';
  clickCount=0
  clickMe(){
    this.clickCount++;
  }
  resetClickCount(){
    this.clickCount = 0;
  }

}
