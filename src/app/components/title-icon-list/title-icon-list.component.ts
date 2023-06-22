import { Component, Input } from '@angular/core';
import {
  CvSideSection,
  IconAndTitle,
} from 'src/app/interfaces/cv-side-section.interface';

@Component({
  selector: 'app-title-icon-list',
  templateUrl: './title-icon-list.component.html',
  styleUrls: ['./title-icon-list.component.scss'],
})
export class TitleIconListComponent {
  @Input()
  public titleAndIcon!: IconAndTitle;
  @Input()
  public listData: any;
}
