import { CvSideSectionGroup } from 'src/app/interfaces/cv-side-section.group.interface';

export const CV_SIDE_SECTION_COLLECTION: CvSideSectionGroup[] = [
  {
    cvSection: [
      {
        title: 'Pozostałe umiejętności',
        icon: 'star',
        listItem: [
          'Pracowitość i zaangażowanie',
          'Umiejętność szybkiego uczenia się',
          'Umiejętność skupienia się',
          'Dbałość o detale',
          'Umiejętność pracy w zespole',
          'Sumienność',
        ],
      },
      {
        title: 'Wykształcenie',
        icon: 'school',
        listItem: [
          'Liceum Ogólnokształcące im. Marii Skłodowskiej-Cuire w Kołaczycach',
          'Zarządzanie, Studia licencjackie - Politechnika Rzeszowska im. Ignacego Łukasiewicza',
        ],
      },
    ],
  },
  {
    cvSection: [
      {
        title: 'Doświadczenie',
        icon: 'workspace_premium',
        listItem: [
          'Praktyki studenckie',
          'Promotor wiedzy na temat treningów siłowych',
          'Trener personalny non profit',
          'Praca dorywcza za granicą',
        ],
      },
      {
        title: 'Kursy',
        icon: 'book',
        listItem: [
          'Angular - kompletny kurs od podstaw - edycja na rok 2021',
          'Angular - The Complete Guide (2023 Edition)',
          'Fundamenty treningu sylwetkowego',
        ],
      },
    ],
  },
  {
    cvSection: [
      {
        title: 'Zainteresowania',
        icon: 'hiking',
        listItem: [
          'Angular',
          'Trening siłowy',
          'Gra na gitarze',
          'Samorozwój',
          'Czytanie książek',
          'Gotowanie',
        ],
      },
    ],
  },
];
