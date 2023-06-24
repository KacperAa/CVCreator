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
    html2canvas(DATA as HTMLElement, { scale: 5 }).then((canvas) => {
      const fileWidth = 211;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      const pageHeight = PDF.internal.pageSize.getHeight();

      // Oblicz liczbę stron na podstawie wysokości obrazu i wysokości strony
      const totalPages = Math.ceil(fileHeight / pageHeight);

      // Iteruj przez każdą stronę i dodaj obraz
      for (let pageNumber = 0; pageNumber < totalPages; pageNumber++) {
        if (pageNumber > 0) {
          PDF.addPage(); // Dodaj nową stronę dla każdej strony oprócz pierwszej
        }
        // Oblicz pozycję dla każdej strony
        position = -pageNumber * pageHeight;

        // Dodaj obraz na aktualną stronę
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      }

      /* PDF.save('angular-demo.pdf'); */
    });
  }
}
