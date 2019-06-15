import { Control } from './control';
import { Type } from '@angular/core';
import { FormGroup } from '@angular/forms';

export class FormItem {
  constructor(public component: Type<any>, public data: Control, public formGroup?: FormGroup) {}
}
