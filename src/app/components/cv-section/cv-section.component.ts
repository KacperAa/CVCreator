import { Component, Input } from '@angular/core';
import { CvSection } from 'src/app/interfaces/cv-section.interface';

@Component({
  selector: 'app-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.scss'],
})
export class CvSectionComponent {
  @Input()
  public data!: CvSection;

  public get columnsKeys(): string[] {
    return Object.keys(this.data.subPoints);
  }

  public checkIsLastColumn(columnKey: string): boolean {
    const isLastElement =
      this.columnsKeys.indexOf(columnKey) === this.columnsKeys.length - 1;
    return isLastElement;
  }
}
