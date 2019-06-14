import { Component } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';

@Component({
  template: `
    <div class="radio">
    <label>
      <input type="radio" id="{{data.labelText}}"> {{data.labelText}}
    </label>
  </div>
  `
})
export class RadioComponent extends BaseComponent {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }
}
