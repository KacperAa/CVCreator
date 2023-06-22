import { CvSection } from '../interfaces/cv-section.interface';

export const CV_SECTIONS: CvSection[] = [
  {
    iconsSrc: ['assets/angular.png', 'assets/typeScript.svg'],
    subPoints: {
      firstColumn: [
        'Angular CLI',
        'Reactive forms',
        'Dynamic forms',
        'TypeScript',
        'Static types',
        'eNum',
        'Generics class/interface',
        'Atomic design',
        'Component communication',
        'Angular material',
        'Directives',
      ],
      secondColumn: [
        'RxJs',
        'Pipes',
        'Reusability',
        'Dependency Injection',
        'Lifecycle hooks',
        'Services',
        'Routing module',
        'HTTP module',
        'Angular animations',
        'Ngx-Charts',
        'OOP',
      ],
    },
  },
  {
    iconsSrc: ['assets/html-logo.png', 'assets/css.png'],
    subPoints: {
      firstColumn: ['HTML 5', 'BEM', 'Responsive web design'],
      secondColumn: ['CSS', 'SCSS', 'Semantic elements'],
    },
  },
];
