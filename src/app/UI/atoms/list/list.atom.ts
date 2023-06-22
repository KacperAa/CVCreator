import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-list',
  templateUrl: './list.atom.html',
  styleUrls: ['./list.atom.scss'],
})
export class ListComponent {
  @Input({ required: true })
  public points!: string[];
  @Input({ required: false })
  public subPointWidth!: string;
  @Input({ required: false })
  public hasParting: boolean = false;

  public isNotLastEl() {}
}
