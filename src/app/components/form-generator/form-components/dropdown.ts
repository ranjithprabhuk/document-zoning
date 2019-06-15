import { Component } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';
import { FormBuilder } from '@angular/forms';

@Component({
  template: `
    <div class="form-group">
    <label for="{{data.labelText}}">{{data.labelText}}</label>
    <select class="form-control" id="{{data.labelText}}" name="{{data.labelText}}" >
      <option *ngFor="let opt of data.value.split(',')" value="opt">{{opt}}</option>
    </select>
    </div>
  `
})
export class DropdownComponent extends BaseComponent {
  constructor(public sharedService: SharedService, public formBuilder : FormBuilder) {
    super(sharedService, formBuilder);
  }
}
