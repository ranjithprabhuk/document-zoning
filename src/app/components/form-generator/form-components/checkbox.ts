import { Component } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';
import { FormBuilder } from '@angular/forms';

@Component({
  template: `
    <div class="radio">
    <label>
      <input type="radio" id="{{data.labelText}}"> {{data.labelText}}
    </label>
  </div>
  `
})
export class CheckboxComponent extends BaseComponent {
  constructor(public sharedService: SharedService, public formBuilder : FormBuilder) {
    super(sharedService, formBuilder);
  }
}
