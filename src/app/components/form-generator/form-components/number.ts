import { Component } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';

@Component({
  template: `
    <div class="form-group">
    <label class="col-sm-12 control-label">{{data.labelText}}</label>
    <div class="col-sm-12">
    <input type="number" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}">
    </div>
    </div>
  `
})
export class NumberComponent extends BaseComponent {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }
}
