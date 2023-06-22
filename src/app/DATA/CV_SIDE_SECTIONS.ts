import { CvSideSection } from '../interfaces/cv-side-section.interface';

export const CV_SIDE_SECTIONS: CvSideSection[] = [
  {
    iconAndTitle: [
      { title: 'Pozostałe umiejętności', icon: 'star' },
      { title: 'Wykształcenie', icon: 'school' },
    ],
    subPoints: {
      firstColumn: [
        'Pracowitość i zaangażowanie',
        'Umiejętność szybkiego uczenia się',
        'Umiejętność skupienia się',
        'Dbałość o detale',
        'Umiejętność pracy w zespole',
        'Sumienność',
      ],
      secondColumn: [
        'Liceum Ogólnokształcące im. Marii Skłodowskiej-Cuire w Kołaczycach',
        'Zarządzanie, Studia licencjackie - Politechnika Rzeszowska im. Ignacego Łukasiewicza',
      ],
    },
  },
  {
    iconAndTitle: [
      { title: 'Doświadczenie', icon: 'workspace_premium' },
      { title: 'Kursy', icon: 'book' },
    ],
    subPoints: {
      firstColumn: [
        'Praktyki studenckie',
        'Promotor wiedzy na temat treningów siłowych',
        'Trener personalny non profit',
        'Praca dorywcza za granicą',
      ],
      secondColumn: [
        'Angular - kompletny kurs od podstaw - edycja na rok 2021',
        'Angular - The Complete Guide (2023 Edition)',
        'Fundamenty treningu sylwetkowego',
      ],
    },
  },

  {
    iconAndTitle: [{ title: 'Zainteresowania', icon: 'hiking' }],
    subPoints: {
      firstColumn: [
        'Angular',
        'Trening siłowy',
        'Gra na gitarze',
        'Samorozwój',
        'Czytanie książek',
        'Gotowanie',
      ],
    },
  },
];
