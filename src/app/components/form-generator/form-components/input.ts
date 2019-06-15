
import { Component, Input } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';
import { FormBuilder } from '@angular/forms';

@Component({
  template: `
    <div class="form-group" [formGroup]="formGroup">
    <label class="col-sm-2 control-label">{{data.labelText}}</label>
    <div class="col-sm-10">
    <input type="input" class="form-control" id="{{data.labelText}}" placeholder="{{data.labelText}}"
    (focus)="focusFunction()" (focusout)="focusOutFunction()" [formControlName]="data.formControlName">
    </div>
    </div>
  `
})
export class InputComponent extends BaseComponent {
  constructor(public sharedService: SharedService, public formBuilder : FormBuilder) {
    super(sharedService, formBuilder);
  }
}
