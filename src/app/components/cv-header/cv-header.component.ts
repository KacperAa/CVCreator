import { Component, Input } from '@angular/core';
import { CvHeader } from 'src/app/interfaces/cv-header.interface';

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.scss'],
})
export class CvHeaderComponent {
  @Input({ required: true })
  public headerData!: CvHeader;
}
