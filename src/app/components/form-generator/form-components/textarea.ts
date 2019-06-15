import { Component } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';

@Component({
  template: `
<<<<<<< HEAD
    <label class="col-12 control-label" for="{{data.labelText}}">{{data.labelText}}</label>
      <div class="col-12">
        <input type="input" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}"
          (focus)="focusFunction()" (focusout)="focusOutFunction()">
      </div>
=======
    <div class="form-group">
    <label class="col-12" for="{{data.labelText}}">{{data.labelText}}</label>
    <div class="col-12">
    <textarea row="3" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}"
 (focus)="focusFunction()" (focusout)="focusOutFunction()"></textarea>
    <div>
>>>>>>> fb48705e816a89f09c605f30306793a91f56cea4
    </div>
  `
})
export class TextAreaComponent extends BaseComponent {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }
}
