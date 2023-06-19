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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CvComponent,
    CvEditorComponent,
    CvHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
