import { Component } from '@angular/core';
import { CvHeader } from 'src/app/interfaces/cv-header.interface';
import { CvSection } from 'src/app/interfaces/cv-section.interface';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  public cvHeader: CvHeader = {
    nickname: 'Kacper Augustyn',
    workplace: 'Junior Angular Developer',
    email: 'kacperaugvstyn@gmail.com',
    tel: '536 822 618',
    imgSrc: '/assets/profile-img.png',
  };

  public cvSection: CvSection[] = [
    {
      iconsSrc: ['assets/angular.png'],
      subPoints: ['RxJs', 'Reactive forms'],
    },
    {
      iconsSrc: [
        'assets/html-logo.png',
        'assets/typeScript.svg',
        'assets/css.png',
      ],
      subPoints: ['RxJs', 'Reactive forms'],
    },
    {
      iconsSrc: ['assets/git.png'],
      subPoints: ['RxJs', 'Reactive forms'],
    },
  ];
}
