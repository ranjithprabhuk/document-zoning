import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedService } from './shared.service';
import { StepInformationComponent } from './components/step-information/step-information.component';

@NgModule({
  declarations: [
    HeaderComponent,
    StepInformationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [SharedService],
  exports: [
    HeaderComponent,
    StepInformationComponent
  ]
})
export class SharedModule { }
