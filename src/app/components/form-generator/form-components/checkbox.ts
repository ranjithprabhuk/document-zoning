import { Component } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';

@Component({
  template: `
    <div class="checkbox">
    <label>
      <input type="checkbox" id="{{data.labelText}}"  (focus)="focusFunction()" (focusout)="focusOutFunction()"> {{data.labelText}}
    </label>
  </div>
  `
})
export class CheckboxComponent extends BaseComponent {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }
}
