import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MedicalFormComponent, UploadFormComponent, FormGeneratorComponent } from './components';
import { FormDirective } from './components/form.directive';
import { FormService} from './shared/services/form.service';
import { InputComponent} from './components/form-generator/form-components/input';
import { DropdownComponent} from './components/form-generator/form-components/dropdown';
import { TextAreaComponent} from './components/form-generator/form-components/textarea';

@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
    MedicalFormComponent,
    FormGeneratorComponent,
    FormDirective,
    InputComponent,
    DropdownComponent,
    TextAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    AppRoutingModule,
    SharedModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    DropdownComponent
  ]
})
export class AppModule { }
