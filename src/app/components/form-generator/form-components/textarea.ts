import { Component } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';

@Component({
  template: `
    <label class="col-12 control-label" for="{{data.labelText}}">{{data.labelText}}</label>
      <div class="col-12">
        <input type="input" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}"
          (focus)="focusFunction()" (focusout)="focusOutFunction()">
      </div>
    </div>
  `
})
export class TextAreaComponent extends BaseComponent {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }
}
