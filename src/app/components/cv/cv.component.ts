import { Component } from '@angular/core';
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
  public cvHeader: CvHeader = {
    nickname: 'Kacper Augustyn',
    workplace: 'Junior Angular Developer',
    email: 'kacperaugvstyn@gmail.com',
    tel: '536 822 618',
    imgSrc: '/assets/profile-img.png',
  };

  public summaryText: LargeSmallText = {
    largeText: 'Podsumowanie',
    smallText:
      'Jestem osobą, która aktywnie rozwija swoje zainteresowanie, jakim jest programowanie front endowe. Cechuję się nieustanną chęcią rozwoju jako programista i wykorzystuję każdą okazję, aby nauczyć się czegoś nowego. Pragnę wykorzystać swoje umiejętności, aby wspomóc zespół programistów Państwa firmy.',
  };

  public cvSections: CvSection[] = [
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

  public cvSideSections: CvSideSection[] = [
    {
      title: 'Pozostałe umiejętności',
      iconName: 'star',
      listItem: ['Angielski - B1'],
    },
    {
      title: 'Wykształcenie',
      iconName: 'school',
      listItem: ['Angielski - B1'],
    },
    {
      title: 'Doświadczenie',
      iconName: 'workspace_premium',
      listItem: ['Angielski - B1'],
    },
    {
      title: 'Kursy',
      iconName: 'book',
      listItem: ['Angielski - B1'],
    },
    {
      title: 'Zainteresowania',
      iconName: 'hiking',
      listItem: ['Angielski - B1'],
    },
  ];
}
