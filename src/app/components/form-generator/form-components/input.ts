import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';

import { FormComponent } from '../../../shared/models/form';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <div class="form-group" [formGroup]="parentGroup">
      <label class="col-12 control-label">{{data.labelText}}</label>
      <div class="col-12">
        <input type="input" class="form-control" id="data.labelText"
          placeholder="{{data.labelText}}" [formControlName]="data.formControlName"
          (focus)="focusFunction()" (focusout)="focusOutFunction()" >
      </div>
    </div>
  `
})
export class InputComponent extends BaseComponent implements FormComponent, OnInit {
  @Input() data: any;
  @Input() parentGroup;

  constructor(public sharedService: SharedService) {
    super(sharedService);
  }

  ngOnInit() {
    const controlName = new FormControl(this.data.value);
    this.parentGroup.addControl([this.data.formControlName] , controlName);
  }
}
