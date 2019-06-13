import { Control } from './control';
import { Type } from '@angular/core';

export class FormItem {
  constructor(public component: Type<any>, public data: Control) {}
}
