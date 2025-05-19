import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title =
    'Shift the overall look and feel by adding these wonderful touches to furniture in your home';
  content =
    'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.';
  name = 'Michelle Appleton';
  date = '28 Jun 2020';

  showShare = signal(false);

  onShareClick() {
    this.showShare.set(!this.showShare());
  }
}
