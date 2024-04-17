import { ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { PostDirective } from './post.directive';

describe('PostDirective', () => {
  it('should create an instance', () => {
    const directive = new PostDirective(<ElementRef>{});
    expect(directive).toBeTruthy();
  });
});
