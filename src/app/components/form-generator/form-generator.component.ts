import { Component, OnInit, ComponentFactoryResolver,ViewChild } from '@angular/core';
import {FormDirective} from '../form.directive';
import { FormItem } from '../../shared/models/form-item';
import { FormService} from '../../shared/services/form.service';
import { FormData} from '../../shared/models/form-data';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  public formItem: FormItem;
  public form: string;

  @ViewChild(FormDirective) formHost: FormDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private formService: FormService) { }

  ngOnInit() {
    let form = this.formService.getForm();
    const viewContainerRef = this.formHost.viewContainerRef;
    viewContainerRef.clear();
    form.forEach(comp => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp.component);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<FormData>componentRef.instance).data = comp.data;

    });

  }

}
