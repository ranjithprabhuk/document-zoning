import { Component } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';
import { FormBuilder } from '@angular/forms';

@Component({
  template: `
    <div class="form-group">
    <label for="{{data.labelText}}">{{data.labelText}}</label>
    <input type="input" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}">
    </div>
  `
})
export class TextAreaComponent extends BaseComponent {
  constructor(public sharedService: SharedService, public formBuilder : FormBuilder) {
    super(sharedService, formBuilder);
  }
}
