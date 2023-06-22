import { Component, Input } from '@angular/core';
import { CvSideSection } from 'src/app/interfaces/cv-side-section.interface';

@Component({
  selector: 'app-title-icon-list',
  templateUrl: './title-icon-list.component.html',
  styleUrls: ['./title-icon-list.component.scss'],
})
export class TitleIconListComponent {
  @Input({ required: true })
  public cvSection!: CvSideSection;
  @Input({ required: false })
  public hasParting: boolean = false;
}
