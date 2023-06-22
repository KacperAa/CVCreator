import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-cv-information',
  templateUrl: './header-cv-information.component.html',
  styleUrls: ['./header-cv-information.component.scss'],
})
export class HeaderCvInformationComponent {
  @Input({ required: true })
  public email!: string;
  @Input({ required: true })
  public tel!: string;
  @Input({ required: true })
  public gitLink!: string;
}
