import { CvSideSectionGroup } from 'src/app/interfaces/cv-side-section.group.interface';

export const CV_SIDE_SECTION_COLLECTION: CvSideSectionGroup[] = [
  {
    cvSection: [
      {
        title: 'Additional skills',
        icon: 'star',
        listItem: [
          'Diligence and commitment',
          'Quick learning ability',
          'Ability to focus',
          'Attention to detail',
          'Teamwork skills',
          'Conscientiousness',
        ],
      },
      {
        title: 'Education',
        icon: 'school',
        listItem: [
          'Maria Skłodowska-Curie General Secondary School in Kołaczyce',
          "Management, Bachelor's degree - Rzeszow University of Technology",
        ],
      },
    ],
  },
  {
    cvSection: [
      {
        title: 'Experience',
        icon: 'workspace_premium',
        listItem: [
          'Student internships',
          'Strength training knowledge promoter',
          'Non-profit personal trainer',
          'Temporary work abroad',
        ],
      },
      {
        title: 'Courses',
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
        title: 'Interests',
        icon: 'hiking',
        listItem: [
          'Angular',
          'Weightlifting',
          'Playing the guitar',
          'Self-development',
          'Reading books',
          'Cooking',
        ],
      },
    ],
  },
];
