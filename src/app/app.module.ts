import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './content/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CvComponent } from './components/cv/cv.component';
import { CvEditorComponent } from './components/cv-editor/cv-editor.component';
import { MatButtonModule } from '@angular/material/button';
import { CvHeaderComponent } from './components/cv-header/cv-header.component';
import { LargeSmallTextComponent } from './UI/atoms/large-small-text/large-small-text.atom';
import { HeaderCvInformationComponent } from './components/header-cv-information/header-cv-information.component';
import { CvSectionComponent } from './components/cv-section/cv-section.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CvSummaryComponent } from './components/cv-summary/cv-summary.component';
import { TitleAndIconComponent } from './UI/atoms/title-and-icon/title-and-icon.atom';
import { CvSideSectionComponent } from './components/cv-side-section/cv-side-section.component';
import { ListComponent } from './UI/atoms/list/list.atom';
import { CvFooterComponent } from './components/cv-footer/cv-footer.component';
import { TitleIconListComponent } from './components/title-icon-list/title-icon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CvComponent,
    CvEditorComponent,
    CvHeaderComponent,
    LargeSmallTextComponent,
    HeaderCvInformationComponent,
    CvSectionComponent,
    CvSummaryComponent,
    TitleAndIconComponent,
    CvSideSectionComponent,
    ListComponent,
    CvFooterComponent,
    TitleIconListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
