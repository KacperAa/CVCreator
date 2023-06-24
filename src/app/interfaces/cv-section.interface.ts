import { ListItem } from './cv-side-section.interface';

export interface CvSection {
  iconsSrc: string[];
  subPoints: SubPoints;
}

export interface SubPoints {
  [key: string]: ListItem[];
}
