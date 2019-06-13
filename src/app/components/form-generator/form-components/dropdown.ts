import { Component, Input } from '@angular/core';

import { FormComponent } from '../../../shared/models/form';

@Component({
  template: `
    <div class="form-group">
    <label for="{{data.labelText}}">{{data.labelText}}</label>
    <select class="form-control" id="{{data.labelText}}" name="{{data.labelText}}" >
      <option *ngFor="let opt of data.options" value="opt">{{opt}}</option>
    </select>
    </div>
  `
})
export class DropdownComponent implements FormComponent {
  @Input() data: any;
}
