import { CvSection } from '../interfaces/cv-section.interface';

export const CV_SECTIONS: CvSection[] = [
  {
    iconsSrc: ['assets/angular.png'],
    subPoints: [
      'Reactive forms',
      'Dynamic forms',
      'Atomic design',
      'Component communication',
      'Angular material',
      'RxJs',
      'Pipes',
      'Reużywalność',
      'Lifecycle hooks',
      'Services',
      'Routing module',
      'HTTP module',
      'Angular animations',
      'Ngx-Charts',
      'Directives',
      'State(nxgs/ngrx/angular state)',
      'Programowanie obiektowe',
    ],
  },
  {
    iconsSrc: [
      'assets/html-logo.png',
      'assets/typeScript.svg',
      'assets/css.png',
    ],
    subPoints: [
      'TypeScript',
      'HTML 5',
      'CSS',
      'SCSS',
      'Tworzenie responsywnych stron',
      'BEM',
      'Tworzenie typów',
      'Tworzenie interfejsów',
      'Generics class/interface',
    ],
  },
  {
    iconsSrc: ['assets/git.png'],
    subPoints: ['Push/pull'],
  },
];
