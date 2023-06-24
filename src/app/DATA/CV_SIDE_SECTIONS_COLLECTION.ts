import { CvSideSectionGroup } from 'src/app/interfaces/cv-side-section.group.interface';
import { Flags } from '../components/eNums/nationals-flags.enum';

export const CV_SIDE_SECTION_COLLECTION: CvSideSectionGroup[] = [
  {
    cvSection: [
      {
        title: 'Additional skills',
        icon: 'star',
        listItem: [
          { text: 'English language - B1', image: Flags.English },
          { text: 'Diligence and commitment' },
          { text: 'Quick learning ability' },
          { text: 'Ability to focus' },
          { text: 'Attention to detail' },
          { text: 'Teamwork skills' },
          { text: 'Conscientiousness' },
        ],
      },
      {
        title: 'Education',
        icon: 'school',
        listItem: [
          {
            text: 'Maria Skłodowska-Curie General Secondary School in Kołaczyce',
            additionalText: '2017 - 2020',
          },
          {
            text: "Management, Bachelor's degree - Rzeszow University of Technology",
            additionalText: '2020 - now',
          },
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
          { text: 'Student internships' },
          { text: 'Strength training knowledge promoter' },
          { text: 'Non-profit personal trainer' },
          { text: 'Temporary work abroad' },
        ],
      },
      {
        title: 'Courses',
        icon: 'book',
        listItem: [
          {
            text: 'Angular - kompletny kurs od podstaw - edycja na rok 2021',
            image: Flags.Poland,
          },
          {
            text: 'Angular - The Complete Guide (2023 Edition)',
            image: Flags.English,
          },
          { text: 'Fundamenty treningu sylwetkowego', image: Flags.Poland },
        ],
      },
    ],
  },
  {
    cvSection: [
      {
        title: 'Hobbies',
        icon: 'fitness_center',
        listItem: [
          { text: 'Angular' },
          { text: 'Weightlifting' },
          { text: 'Playing the guitar' },
          { text: 'Self-development' },
          { text: 'Reading books' },
          { text: 'Cooking' },
        ],
      },
    ],
  },
];
