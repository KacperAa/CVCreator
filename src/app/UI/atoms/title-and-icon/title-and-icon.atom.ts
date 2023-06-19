import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-title-and-icon',
  templateUrl: './title-and-icon.atom.html',
  styleUrls: ['./title-and-icon.atom.scss'],
})
export class TitleAndIconComponent {
  @Input({ required: true })
  public title!: string;
  @Input({ required: true })
  public iconName!: string;
}
