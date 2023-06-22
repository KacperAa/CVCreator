import { Component } from '@angular/core';
import { CV_HEADER } from 'src/app/DATA/CV_HEADER';
import { CV_SECTIONS } from 'src/app/DATA/CV_SECTIONS';
import { CV_SIDE_SECTION_COLLECTION } from 'src/app/DATA/CV_SIDE_SECTIONS_COLLECTION';
import { CvHeader } from 'src/app/interfaces/cv-header.interface';
import { CvSection } from 'src/app/interfaces/cv-section.interface';
import { CvSideSectionGroup } from 'src/app/interfaces/cv-side-section.group.interface';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { SUMMARY_TEXT } from 'src/app/DATA/SUMMARY_TEXT';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  public cvHeader: CvHeader = CV_HEADER;
  public summaryText: string = SUMMARY_TEXT;
  public cvSections: CvSection[] = CV_SECTIONS;
  public cvSideSections: CvSideSectionGroup[] = CV_SIDE_SECTION_COLLECTION;

  public exportToPdf(): void {
    const DATA: HTMLElement | null = document.getElementById('cv');
    html2canvas(DATA as HTMLElement, { scale: 5 }) // Increasing the image resolution
      .then((canvas: HTMLCanvasElement) => {
        const fileWidth = 218.2;
        const fileHeight = (canvas.height * fileWidth) / canvas.width;
        const toJpeg = canvas.toDataURL('image/jpeg'); // JPEG format
        const pdf = new jsPDF('p', 'mm', [210, fileHeight + 10]); // Page height reduction
        let position = 0;
        /* const pageHeight = pdf.internal.pageSize.getHeight(); */
        /* 
        const totalPages = Math.ceil(fileHeight / pageHeight); */

        /*    for (let pageNumber = 0; pageNumber < totalPages; pageNumber++) {
          if (pageNumber > 0) {
            pdf.addPage();
          } */
        /*  position = -pageNumber * pageHeight; */

        pdf.addImage(toJpeg, 'JPEG', 0, position, fileWidth, fileHeight);
        /*  } */

        pdf.save('cv.pdf');
      });
  }
}
