import { CvSection } from '../interfaces/cv-section.interface';

export const CV_SECTIONS: CvSection[] = [
  {
    iconsSrc: ['assets/angular.png', 'assets/typeScript.svg'],
    subPoints: {
      firstColumn: [
        { text: 'Angular CLI' },
        { text: 'Reactive forms' },
        { text: 'Dynamic forms' },
        { text: 'TypeScript' },
        { text: 'Static types' },
        { text: 'eNum' },
        { text: 'Generics class/interface' },
        { text: 'Atomic design' },
        { text: 'Component communication' },
        { text: 'Angular material' },
        { text: 'Directives' },
      ],
      secondColumn: [
        { text: 'RxJs' },
        { text: 'Pipes' },
        { text: 'Reusability' },
        { text: 'Lifecycle hooks' },
        { text: 'Services' },
        { text: 'Routing module' },
        { text: 'HTTP module' },
        { text: 'Angular animations' },
        { text: 'Ngx-Charts' },
        { text: 'OOP' },
      ],
    },
  },
  {
    iconsSrc: ['assets/html-logo.png', 'assets/css.png'],
    subPoints: {
      firstColumn: [
        { text: 'HTML 5' },
        { text: 'BEM' },
        { text: 'Responsive web design' },
      ],
      secondColumn: [
        { text: 'CSS' },
        { text: 'SCSS' },
        { text: 'Semantic elements' },
      ],
    },
  },
];
