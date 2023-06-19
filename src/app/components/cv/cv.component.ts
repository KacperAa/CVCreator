import { Component } from '@angular/core';
import { CV_HEADER } from 'src/app/DATA/CV_HEADER';
import { CV_SECTIONS } from 'src/app/DATA/CV_SECTIONS';
import { CV_SIDE_SECTIONS } from 'src/app/DATA/CV_SIDE_SECTIONS';
import { SUMMARY_TEXT } from 'src/app/DATA/SUMMARY_TEXT';
import { CvHeader } from 'src/app/interfaces/cv-header.interface';
import { CvSection } from 'src/app/interfaces/cv-section.interface';
import { CvSideSection } from 'src/app/interfaces/cv-side-section.interface';
import { LargeSmallText } from 'src/app/interfaces/large-small-text.interface';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  public cvHeader: CvHeader = CV_HEADER;
  public summaryText: LargeSmallText = SUMMARY_TEXT;
  public cvSections: CvSection[] = CV_SECTIONS;
  public cvSideSections: CvSideSection[] = CV_SIDE_SECTIONS;
}
