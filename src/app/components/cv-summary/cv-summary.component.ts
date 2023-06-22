import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-summary',
  templateUrl: './cv-summary.component.html',
  styleUrls: ['./cv-summary.component.scss'],
})
export class CvSummaryComponent {
  @Input({ required: true })
  public text!: string;
}
