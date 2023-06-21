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
  @Input()
  public iconsSrc!: string[];
  public get columnsKeys(): string[] {
    return Object.keys(this.data.subPoints);
  }
}
