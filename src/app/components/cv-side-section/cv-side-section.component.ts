import { Component, Input } from '@angular/core';
import { CvSideSection } from 'src/app/interfaces/cv-side-section.interface';

@Component({
  selector: 'app-cv-side-section',
  templateUrl: './cv-side-section.component.html',
  styleUrls: ['./cv-side-section.component.scss'],
})
export class CvSideSectionComponent {
  @Input({ required: true })
  public data!: CvSideSection;
}
