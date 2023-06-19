import { Component } from '@angular/core';
import { CvHeader } from 'src/app/interfaces/cv-header.interface';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  public cvHeader: CvHeader = {
    nickname: 'Kacper Augustyn',
    workplace: 'Junior Angular Developer',
    email: 'kacperaugvstyn@gmail.com',
    tel: '536 822 618',
    imgSrc: '/assets/profile-img.png',
  };
}
