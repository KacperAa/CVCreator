import { Component, Input } from '@angular/core';
import { ListItem } from 'src/app/interfaces/cv-side-section.interface';

@Component({
  selector: 'ui-list',
  templateUrl: './list.atom.html',
  styleUrls: ['./list.atom.scss'],
})
export class ListComponent {
  @Input({ required: true })
  public points!: ListItem[];
  @Input({ required: false })
  public subPointWidth!: string;
  @Input({ required: false })
  public hasParting: boolean = false;

  public hasAdditionalContent(point: ListItem): boolean {
    return point.additionalText !== undefined || point.image !== undefined
      ? true
      : false;
  }
}
