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
  public cvSideSectionsGroup: CvSideSectionGroup[] = CV_SIDE_SECTION_COLLECTION;

  public exportToPdf(): void {
    const DATA: HTMLElement | null = document.getElementById('cv');
    html2canvas(DATA as HTMLElement, { scale: 6.5 }).then((canvas) => {
      const fileWidth = 210;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const imgFormat = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      });
      let position = 0;
      const pageHeight = pdf.internal.pageSize.getHeight();

      this._addLinksToPdf(pdf);

      // Calculate the number of pages
      const totalPages = Math.ceil(fileHeight / pageHeight);

      // Literate the page and add content to it
      for (let pageNumber = 0; pageNumber < totalPages; pageNumber++) {
        if (pageNumber > 0) {
          pdf.addPage(); // Add a new page for each page except the first
        }
        // Calculate the positions for each page
        position = -pageNumber * pageHeight;

        pdf.addImage(imgFormat, 'PNG', 0, position, fileWidth, fileHeight);
      }

      pdf.save('CV.pdf');
    });
  }

  private _addLinksToPdf(pdf: jsPDF): void {
    pdf.link(8, 60, 70, 7, { url: 'https://github.com/KacperAa' }); //git
  }
}
