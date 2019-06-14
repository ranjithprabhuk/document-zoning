import { Component, Input } from '@angular/core';

import { FormComponent } from '../../../shared/models/form';

@Component({
  template: `
    <div class="form-group">
    <label class="col-sm-2 control-label">{{data.labelText}}</label>
    <div class="col-sm-10">
    <input type="number" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}">
    </div>
    </div>
  `
})
export class NumberComponent implements FormComponent {
  @Input() data: any;
}