import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedService } from './shared.service';
import { StepInformation } from './components/step-information/step-information.component';

@NgModule({
  declarations: [
    HeaderComponent,
    StepInformation
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [SharedService],
  exports: [
    HeaderComponent,
    StepInformation
  ]
})
export class SharedModule { }
