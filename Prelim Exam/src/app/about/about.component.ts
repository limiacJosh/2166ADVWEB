import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about = 'About'
  description = 'Welcome to "Dis/Like" a unique social experiment where your likes and dislikes become the brushstrokes of a global canvas. Dive into the world of subjective preferences, challenge your instincts, and discover the fascinating interplay of diverse opinions. Join us in this thought-provoking journey where every click contributes to a collective mosaic of perspectives. Embrace the experiment, embrace the diversity, and let the opinions flow!';
  tots = 'Do you like it or dislike it?';




  

  

  feedbackText: string = ''; // Variable to store feedback text

  like() {
    this.feedbackText = 'Thank you for liking!';
  }

  dislike() {
    this.feedbackText = 'We are sorry, we will try to improve!';
  }
}
