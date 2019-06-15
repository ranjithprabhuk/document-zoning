import { Component, Input, OnInit } from '@angular/core';

import { FormComponent } from '../../../shared/models/form';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <div class="form-group" [formGroup]="parentGroup">
    <label class="col-12 control-label">{{data.labelText}}</label>
    <div class="col-12">
    <input type="input" class="form-control" id="data.labelText" placeholder="{{data.labelText}}" [formControlName]="data.formControlName">
    </div>
    </div>
  `
})
export class InputComponent implements FormComponent, OnInit {
  @Input() data: any;
  @Input() parentGroup;

  ngOnInit() {
    const controlName = new FormControl(this.data.value);
    this.parentGroup.addControl([this.data.formControlName] , controlName);

  }
}
