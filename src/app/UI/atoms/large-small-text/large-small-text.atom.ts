import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-large-small-text',
  templateUrl: './large-small-text.atom.html',
  styleUrls: ['./large-small-text.atom.scss'],
})
export class LargeSmallTextComponent {
  @Input({ required: true })
  public largeText!: string;
  @Input({ required: true })
  public smallText!: string;
}
