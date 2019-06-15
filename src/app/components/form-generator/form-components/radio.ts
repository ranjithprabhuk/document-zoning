import { Component, OnInit } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';
import { FormComponent } from '../../../shared/models/form';
import { FormControl } from '@angular/forms';

@Component({
  template: `
  <div class="form-group" [formGroup]="parentGroup">
    <div class="radio">
    <label>
      <input type="radio" id="{{data.labelText}}" [formControlName]="data.formControlName"
       (focus)="focusFunction()" (focusout)="focusOutFunction()"> {{data.labelText}}
    </label>
  </div>
  </div>
  `
})
export class RadioComponent extends BaseComponent implements FormComponent, OnInit {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }

  ngOnInit() {
    const controlName = new FormControl(this.data.value);
    this.parentGroup.addControl([this.data.formControlName] , controlName);
  }
}
