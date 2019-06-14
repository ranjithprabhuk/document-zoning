import { Component, Input } from '@angular/core';

import { FormComponent } from '../../../shared/models/form';

@Component({
  template: `
    <div class="radio">
    <label>
      <input type="radio" id="{{data.labelText}}"> {{data.labelText}}
    </label>
  </div>
  `
})
export class CheckboxComponent implements FormComponent {
  @Input() data: any;
}
