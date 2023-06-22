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

  public get columnsKeys(): string[] {
    return Object.keys(this.data.subPoints);
  }

  public checkIsLastList(columnKey: string): boolean {
    const isLastElement =
      this.columnsKeys.indexOf(columnKey) === this.columnsKeys.length - 1;
    return isLastElement;
  }
}
