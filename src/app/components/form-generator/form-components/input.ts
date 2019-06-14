import { Component, Input } from '@angular/core';

import { FormComponent } from '../../../shared/models/form';

@Component({
  template: `
    <div class="form-group">
    <label class="col-12 control-label">{{data.labelText}}</label>
    <div class="col-12">
    <input type="input" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}">
    </div>
    </div>
  `
})
export class InputComponent implements FormComponent {
  @Input() data: any;
}
