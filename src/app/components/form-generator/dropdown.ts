import { Component, Input }  from '@angular/core';

import { FormData }       from '../../shared/models/form-data';

@Component({
  template: `
    <div class="form-group">
    <label for="{{data.labelText}}">{{data.labelText}}</label>
    <select id="{{data.labelText}}" name="{{data.labelText}}" >
      <option *ngFor="let opt of data.options" value="opt">{{opt}}</option>
    </select>
    </div>
  `
})
export class DropdownComponent implements FormData {
  @Input() data: any;
}