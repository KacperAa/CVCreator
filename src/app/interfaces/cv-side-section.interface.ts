import { SubPoints } from './cv-section.interface';

export interface CvSideSection {
  iconAndTitle: IconAndTitle[];

  subPoints: SubPoints;
}

export interface IconAndTitle {
  icon: string;
  title: string;
}
