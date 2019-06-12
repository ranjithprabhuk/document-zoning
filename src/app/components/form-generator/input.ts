import { Component, Input }  from '@angular/core';

import { FormData }       from '../../shared/models/form-data';

@Component({
  template: `
    <div class="form-group">
    <label for="{{data.labelText}}">{{data.labelText}}</label> 
    <input type="input" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}">
    </div>
  `
})
export class InputComponent implements FormData {
  @Input() data: any;
}