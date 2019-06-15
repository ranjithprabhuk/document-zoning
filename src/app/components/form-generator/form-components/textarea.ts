import { Component, OnInit } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';
import { FormComponent } from '../../../shared/models/form';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <div class="form-group" [formGroup]="parentGroup">
    <label class="col-12" for="{{data.labelText}}">{{data.labelText}}</label>
    <div class="col-12">
    <textarea row="3" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}"
 (focus)="focusFunction()" (focusout)="focusOutFunction()" [formControlName]="data.formControlName"></textarea>
    <div>
    </div>
  `
})
export class TextAreaComponent extends BaseComponent implements FormComponent, OnInit {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }

  ngOnInit() {
    const controlName = new FormControl(this.data.value);
    this.parentGroup.addControl([this.data.formControlName] , controlName);
  }
}
