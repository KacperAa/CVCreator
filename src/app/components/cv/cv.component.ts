import { Component,  } from '@angular/core';
import { CV_HEADER } from 'src/app/DATA/CV_HEADER';
import { CV_SECTIONS } from 'src/app/DATA/CV_SECTIONS';
import { CV_SIDE_SECTIONS } from 'src/app/DATA/CV_SIDE_SECTIONS';
import { SUMMARY_TEXT } from 'src/app/DATA/SUMMARY_TEXT';
import { CvHeader } from 'src/app/interfaces/cv-header.interface';
import { CvSection } from 'src/app/interfaces/cv-section.interface';
import { CvSideSection } from 'src/app/interfaces/cv-side-section.interface';
import { LargeSmallText } from 'src/app/interfaces/large-small-text.interface';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

  public exportToPdf(): void {
    const DATA: HTMLElement | null = document.getElementById('cv');
    html2canvas(DATA as HTMLElement, { scale: 5 }) // Increasing the image resolution
      .then((canvas: HTMLCanvasElement) => {
        const fileWidth = 218.2;
        const fileHeight = (canvas.height * fileWidth) / canvas.width;
        const FILEURI = canvas.toDataURL('image/jpeg'); // Zmiana formatu obrazu na JPEG
        const PDF = new jsPDF('p', 'mm', [210, fileHeight + 10]); // Zmniejszenie wysokości strony PDF
        let position = 0;
        const pageHeight = PDF.internal.pageSize.getHeight();

        const totalPages = Math.ceil(fileHeight / pageHeight);

        for (let pageNumber = 0; pageNumber < totalPages; pageNumber++) {
          if (pageNumber > 0) {
            PDF.addPage();
          }
          position = -pageNumber * pageHeight;

          PDF.addImage(FILEURI, 'JPEG', 0, position, fileWidth, fileHeight);
        }

        PDF.save('cv.pdf');
      });
  }
}
