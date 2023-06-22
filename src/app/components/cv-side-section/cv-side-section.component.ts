import { Component, Input } from '@angular/core';
import { CvSideSection } from 'src/app/interfaces/cv-side-section.interface';
import { CvSideSectionGroup } from 'src/app/interfaces/cv-side-section.group.interface';

@Component({
  selector: 'app-cv-side-section',
  templateUrl: './cv-side-section.component.html',
  styleUrls: ['./cv-side-section.component.scss'],
})
export class CvSideSectionComponent {
  @Input({ required: true })
  public data!: CvSideSectionGroup;

  public isLastColumn(column: CvSideSection): boolean {
    const lastIndex = this.data.cvSection.length - 1;
    const columnIndex = this.data.cvSection.indexOf(column);

    return columnIndex === lastIndex;
  }
}
