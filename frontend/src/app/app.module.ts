import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';

@NgModule({
  declarations: [
    AppComponent, QuestionComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
