import { Component } from '@angular/core';
import { SharedService } from '@shared/shared.service';
import { BaseComponent } from './basecomponent';

@Component({
  template: `
    <div class="form-group">
    <label class="col-12" for="{{data.labelText}}">{{data.labelText}}</label>
    <div class="col-12">
    <textarea row="3" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}"
 (focus)="focusFunction()" (focusout)="focusOutFunction()"></textarea>
    <div>
    </div>
  `
})
export class TextAreaComponent extends BaseComponent {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }
}
