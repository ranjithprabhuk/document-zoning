import { Component, OnInit } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';
import { FormComponent } from '../../../shared/models/form';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <div class="form-group" [formGroup]="parentGroup">
    <label class="col-sm-2 control-label">{{data.labelText}}</label>
    <div class="col-sm-10">
    <input type="email" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}"
    (focus)="focusFunction()" (focusout)="focusOutFunction()" [formControlName]="data.formControlName">
    </div>
    </div>
  `
})
export class EmailComponent extends BaseComponent implements FormComponent, OnInit {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }

  ngOnInit() {
    const controlName = new FormControl(this.data.value);
    this.parentGroup.addControl([this.data.formControlName] , controlName);
  }
}
