import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'prelimexam';
  
  clientName = 'Joshua Limiac';
  update = '20 yrs old';
  text = 'Dive into "Perception Palette," a social experiment exploring the dynamics of liking and disliking images. Navigate through a diverse collection designed to evoke varied emotions. Reflect on the factors influencing your reactions and join the conversation in the comments. Together, lets unravel how digital engagement shapes our perceptions in this intriguing exploration of the online image experience.';
  experiment = 'Social Experiment';
  desc = 'The user can choose whether or not to like the photo on this main page.';
  clickCountLike=0
  clickCountDislike=0
  clickMeLike(){
    this.clickCountLike++;
  }
  clickMeDislike(){
    this.clickCountDislike++;
  }
  
}
