import { Component, Input } from '@angular/core';

import { FormComponent } from '../../../shared/models/form';

@Component({
  template: `
    <div class="form-group">
    <label for="{{data.labelText}}">{{data.labelText}}</label>
    <input type="radio" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}">
    </div>
  `
})
export class RadioComponent implements FormComponent {
  @Input() data: any;
}
