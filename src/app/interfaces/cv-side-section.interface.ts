export interface CvSideSection {
  title: string;
  icon: string;
  listItem: ListItem[];
}

export interface ListItem {
  text: string;
  additionalText?: string;
  image?: string;
}
