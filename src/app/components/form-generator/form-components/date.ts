import { Component } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';
import { FormBuilder } from '@angular/forms';

@Component({
  template: `
    <div class="form-group">
    <label class="col-sm-2 control-label">{{data.labelText}}</label>
    <div class="col-sm-10">
    <input type="date" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}">
    </div>
    </div>
  `
})
export class DateComponent extends BaseComponent {
  constructor(public sharedService: SharedService, public formBuilder : FormBuilder) {
    super(sharedService, formBuilder);
  }
}
