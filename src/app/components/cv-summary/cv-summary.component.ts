import { Component, Input } from '@angular/core';
import { LargeSmallText } from 'src/app/interfaces/large-small-text.interface';

@Component({
  selector: 'app-cv-summary',
  templateUrl: './cv-summary.component.html',
  styleUrls: ['./cv-summary.component.scss'],
})
export class CvSummaryComponent {
  @Input({ required: true })
  public text!: LargeSmallText;
}
