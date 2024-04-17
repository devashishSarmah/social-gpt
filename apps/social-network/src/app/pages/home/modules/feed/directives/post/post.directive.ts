import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPost]',
  standalone: true,
})
export class PostDirective {
  private _text!: string;

  constructor(private elementRef: ElementRef) {}

  /**
   * Get the post as a text. Parse it and generate a HTML template to display in formatted manner.
   * If there are more than 125 characters, append ```view more```
   */
  @Input()
  set appPost(text: string) {
    let exceededCharacterLimit = false;

    text = text.trim();
    this._text = text;
    if (text) {
      if (text.length > 125) {
        exceededCharacterLimit = true;
        text = this._text.slice(0, 125);
      }

      this.setText(text, exceededCharacterLimit);
    }
  }

  private setText(text: string, appendViewMoreBtn = false) {
    text = text.trim();
    let formattedPost = text.replace(
      /(#\w+)/g,
      '<span class="text-charcoal font-semibold">$1</span>'
    );

    if (appendViewMoreBtn) {
      formattedPost += `... <span class="view-more cursor-pointer opacity-60">more</span>`;
    }

    (
      this.elementRef.nativeElement as HTMLElement
    ).innerHTML = `<div>${formattedPost}</div>`;

    if (appendViewMoreBtn) {
      (this.elementRef.nativeElement as HTMLElement)
        .querySelector('.view-more')
        ?.addEventListener('click', () => {
          (this.elementRef.nativeElement as HTMLElement)
            .querySelector('.view-more')
            ?.remove();

          this.setText(this._text);
        });
    }
  }
}
