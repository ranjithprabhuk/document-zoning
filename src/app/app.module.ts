import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, ModalModule, CollapseModule } from 'ngx-bootstrap';
import { FabricModule, FABRIC_CONFIG } from 'ngx-fabric-wrapper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {
  MedicalFormComponent,
  UploadFormComponent,
  FormGeneratorComponent,
  PdfHighlighterComponent
} from './components';
import { FormDirective } from './components/form.directive';
import { FormService} from './shared/services/form.service';
import { ConfigService } from './shared/services/config.service';
import {
  InputComponent,
  DropdownComponent,
  RadioComponent,
  TextAreaComponent,
  CheckboxComponent,
  DateComponent,
  TelComponent,
  NumberComponent,
  EmailComponent
} from './components/form-generator/form-components';

@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
    MedicalFormComponent,
    FormGeneratorComponent,
    FormDirective,
    InputComponent,
    DropdownComponent,
    RadioComponent,
    TextAreaComponent,
    CheckboxComponent,
    DateComponent,
    TelComponent,
    NumberComponent,
    EmailComponent,
    PdfHighlighterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule,
    FabricModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    FormService,
    { provide: FABRIC_CONFIG, useValue: {} },
    ConfigService,
    HttpClient
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    DropdownComponent,
    RadioComponent,
    TextAreaComponent,
    CheckboxComponent,
    DateComponent,
    TelComponent,
    NumberComponent,
    EmailComponent
  ]
})
export class AppModule { }
