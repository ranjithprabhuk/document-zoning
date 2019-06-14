
import { Component } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';

@Component({
  template: `
    <div class="form-group">
    <label class="col-sm-2 control-label">{{data.labelText}}</label>
    <div class="col-sm-10">
    <input type="input" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}"
    (focus)="focusFunction()" (focusout)="focusOutFunction()">
    </div>
    </div>
  `
})
export class InputComponent extends BaseComponent {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }
}
