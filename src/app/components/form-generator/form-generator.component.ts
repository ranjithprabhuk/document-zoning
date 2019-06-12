import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormDirective } from '../form.directive';
import { FormItem } from '../../shared/models/form-item';
import { FormService } from '../../shared/services/form.service';
import { FormComponent } from '../../shared/models/form';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  @ViewChild(FormDirective) formHost: FormDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private formService: FormService
    ) {

    }

  ngOnInit() {
    const form = this.formService.getForm();
    const viewContainerRef = this.formHost.viewContainerRef;
    viewContainerRef.clear();
    form.forEach(comp => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp.component);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as FormComponent).data = comp.data;

    });

  }

}
