import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { InputComponent} from './components/form-generator/form-components/input';
import { DropdownComponent} from './components/form-generator/form-components/dropdown';
import { RadioComponent} from './components/form-generator/form-components/radio';
import { FieldSetEndComponent} from './components/form-generator/form-components/fieldsetend';
import { FieldSetStartComponent} from './components/form-generator/form-components/fieldsetstart';
import { TextAreaComponent} from './components/form-generator/form-components/textarea';
import { PdfHighlighterComponent } from './components/pdf-highlighter/pdf-highlighter.component';

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
    PdfHighlighterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    FabricModule,
    SharedModule
  ],
  providers: [
    FormService,
    { provide: FABRIC_CONFIG, useValue: {} },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    DropdownComponent,
    RadioComponent,
    TextAreaComponent,
    FieldSetEndComponent,
    FieldSetStartComponent,
  ]
})
export class AppModule { }
