
import { Component, Input } from '@angular/core';
import { FormComponent } from '../../../shared/models/form';
import { SharedService } from '@shared/shared.service';

@Component({
  template: `
    <div class="form-group">
    <label class="col-sm-2 control-label">{{data.labelText}}</label>
    <div class="col-sm-10">
    <input type="input" class="form-control" id="{{data.labelText}}" placeholder="{{data.value}}" (focus)="focusFunction($event)" (focusout)="focusOutFunction($event)">
    </div>
    </div>
  `
})
export class InputComponent implements FormComponent {
  @Input() data: any;

  constructor(private sharedService: SharedService){

  }

  public focusFunction($event){
   this.sharedService.setCurrentFocus(this.data);
  }

  public focusOutFunction($event){
    this.sharedService.setCurrentFocus(null);
  }
}
