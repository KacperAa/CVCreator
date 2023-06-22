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
        'Statyczne typy',
        'eNum',
        'Generics class/interface',
        'Atomic design',
        'Component communication',
        'Angular material',
        'Directives',
        'OOP',
      ] /* jak polski to polski ang to ang */,
      secondColumn: [
        'RxJs',
        'Pipes',
        'Reużywalność' /* to opisac cos wiecej nia ad */,
        'Dependency Injection',
        'Lifecycle hooks',
        'Services',
        'Routing module',
        'HTTP module',
        'Angular animations',
        'Ngx-Charts',
        'Wzorce projektowe',
        'State(nxgs/ngrx/angular state)',
      ],
    },
  },
  {
    iconsSrc: ['assets/html-logo.png', 'assets/css.png'],
    subPoints: {
      firstColumn: ['HTML 5', 'BEM', 'Tworzenie responsywnych stron'],
      secondColumn: ['CSS', 'SCSS', 'Znaczniki semantyczne'],
    },
  },
];
