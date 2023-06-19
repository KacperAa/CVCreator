import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email-and-tel',
  templateUrl: './email-and-tel.component.html',
  styleUrls: ['./email-and-tel.component.scss'],
})
export class EmailAndTelComponent {
  @Input({ required: true })
  public email!: string;
  @Input({ required: true })
  public tel!: string;
}
