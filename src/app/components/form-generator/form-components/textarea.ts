import { Component } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';

@Component({
  template: `
    <div class="form-group">
    <label for="{{data.labelText}}">{{data.labelText}}</label>
    <input type="input" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}">
    </div>
  `
})
export class TextAreaComponent extends BaseComponent {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }
}
