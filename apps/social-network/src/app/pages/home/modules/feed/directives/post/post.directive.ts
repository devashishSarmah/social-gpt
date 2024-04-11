import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPost]',
  standalone: true,
})
export class PostDirective<T = unknown> {
  private _context: PostContext<T> = new PostContext<T>();

  constructor(
    private containerRef: ViewContainerRef,
    private templateRef: TemplateRef<PostContext<T>>
  ) {}

  /**
   * Get the post as a text. Parse it and generate a HTML template to display in formatted manner.
   */
  @Input()
  set appPost(text: T) {
    this._context.$implicit = this._context.post = text;
    this._updateView();
  }

  private _updateView() {
    this.containerRef.clear();
    if (this._context.$implicit) {
      const formattedPost = (this._context.$implicit as string).replace(/(#\w+)/g, '<span class="text-charcoal">$1</span>');
      this._context.fPost = <any>`<div>${formattedPost}</div>`;
      this.containerRef.createEmbeddedView(this.templateRef, this._context);
      console.log(this.templateRef, this.containerRef);
    }
  }

  static ngTemplateGuard_appPost: 'binding';

  static ngTemplateContextGuard<T>(dir: PostDirective<T>, ctx: any): ctx is PostContext<Exclude<T, false | 0 | '' | null | undefined>> {
    return true;
  }
}

export class PostContext<T = unknown> {
  public $implicit: T = null!;
  public post: T = null!;
  public fPost: T = null!;
}
