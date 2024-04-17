import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PostDirective } from './directives/post/post.directive';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, PostDirective, NgOptimizedImage],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  dummyPost = `🌅 Sunrise at the lake! Early mornings have never been so peaceful. 🚣‍♂️💧

  📸 Swipe to see the mist rising off the water as the sun breaks the horizon. Pure magic!
  
  #sunriselove #lakeviews #morningpeace #naturephotography #earlybirdgets #serenitynow`;
}
