import { CvSection } from '../interfaces/cv-section.interface';

export const CV_SECTIONS: CvSection[] = [
  {
    iconsSrc: ['assets/angular.png', 'assets/typeScript.svg'],
    subPoints: {
      firstColumn: [
        'Angular CLI',
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
      secondColumn: [
        'TypeScript',
        'Statyczne typy',
        'Tworzenie interfejsów',
        'Generics class/interface',
      ],
    },
  },
  {
    iconsSrc: ['assets/html-logo.png', 'assets/css.png'],
    subPoints: {
      firstColumn: ['HTML 5', 'Znaczniki semantyczne', 'BEM'],
      secondColumn: ['CSS', 'SCSS', 'Tworzenie responsywnych stron'],
    },
  },
  {
    iconsSrc: ['assets/git.png'],
    subPoints: { firstColumn: ['Push/pull'] },
  },
];
