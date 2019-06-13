

import { Component, Input } from '@angular/core';
import { FormComponent } from '../../../shared/models/form';

@Component({
  template: `
  <fieldset>
  <legend>{{data.fieldset}}</legend>
   </fieldset>
  `
})
export class FieldSetStartComponent implements FormComponent {
  @Input() data: any;
}
