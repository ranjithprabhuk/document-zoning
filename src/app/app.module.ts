import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AccordionModule, ModalModule } from 'ngx-bootstrap';
import { FabricModule, FABRIC_CONFIG } from 'ngx-fabric-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MedicalFormComponent, UploadFormComponent, FormGeneratorComponent } from './components';
import { FormDirective } from './components/form.directive';
import { FormService} from './shared/services/form.service';
import {
  InputComponent,
  DropdownComponent,
  RadioComponent,
  FieldSetEndComponent,
  FieldSetStartComponent,
  TextAreaComponent,
  CheckboxComponent,
  DateComponent,
  TelComponent,
  NumberComponent,
  EmailComponent
} from './components/form-generator/form-components/index';
import { PdfHighlighterComponent } from './components/pdf-highlighter/pdf-highlighter.component';
import { ConfigService } from './shared/services/config.service';

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
    FieldSetEndComponent,
    FieldSetStartComponent,
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
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
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
    FieldSetEndComponent,
    FieldSetStartComponent,
    CheckboxComponent,
    DateComponent,
    TelComponent,
    NumberComponent,
    EmailComponent
  ]
})
export class AppModule { }
