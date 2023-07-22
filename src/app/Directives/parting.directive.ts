import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[parting]',
})
export class PartingDirective implements OnInit {
  @Input({ required: false })
  public width: string = '90%';
  @Input({ required: false })
  public border: string = '1px solid';
  @Input({ required: false })
  public color: string = 'rgb(189, 189, 189)';
  @Input({ required: false })
  public margin: string = '30px 0 33px 0';

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) {}
  public ngOnInit(): void {
    this._setBorder();
    this._setColor();
    this._setMargin();
    this._setWidth();
  }

  private _setBorder(): void {
    this._renderer.setStyle(
      this._elRef.nativeElement,
      'border-top',
      this.border
    );
  }

  private _setColor(): void {
    this._renderer.setStyle(
      this._elRef.nativeElement,
      'border-color',
      this.color
    );
  }

  private _setWidth(): void {
    this._renderer.setStyle(this._elRef.nativeElement, 'width', '90%');
  }
  private _setMargin(): void {
    this._renderer.setStyle(this._elRef.nativeElement, 'margin', this.margin);
  }
}
