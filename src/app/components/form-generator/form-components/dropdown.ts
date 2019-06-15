import { Component, OnInit } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';
import { FormComponent } from '../../../shared/models/form';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <div class="form-group" [formGroup]="parentGroup">
    <label for="{{data.labelText}}">{{data.labelText}}</label>
    <select class="form-control" id="{{data.labelText}}" name="{{data.labelText}}"
    (focus)="focusFunction()" (focusout)="focusOutFunction()" [formControlName]="data.formControlName">
      <option *ngFor="let opt of data.value.split(',')" value="opt">{{opt}}</option>
    </select>
    </div>
  `
})
export class DropdownComponent extends BaseComponent implements FormComponent, OnInit {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }

  ngOnInit() {
    const controlName = new FormControl(this.data.value);
    this.parentGroup.addControl([this.data.formControlName] , controlName);
  }
}
