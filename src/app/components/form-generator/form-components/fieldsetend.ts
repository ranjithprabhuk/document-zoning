

import { Component, Input } from '@angular/core';

import { FormComponent } from '../../../shared/models/form';

@Component({
  template: `

  `
})
export class FieldSetEndComponent implements FormComponent {
  @Input() data: any;
}
