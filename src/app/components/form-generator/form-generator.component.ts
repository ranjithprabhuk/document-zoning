import { Component, OnInit, ComponentFactoryResolver, ViewChild, AfterViewChecked } from '@angular/core';
import { FormDirective } from '../form.directive';
import { FormItem } from '../../shared/models/form-item';
import { FormService } from '../../shared/services/form.service';
import { FormComponent } from '../../shared/models/form';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit, AfterViewChecked {
  @ViewChild(FormDirective) formHost: FormDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private formService: FormService
    ) {

    }

  ngOnInit(): void {

  }

  ngAfterViewChecked(): void {
    this.generateForm();
  }

  public generateForm(): void {
    const form = this.formService.getForm();
    if (this.formHost) {
      const { viewContainerRef } = this.formHost;
      if (viewContainerRef) {
        viewContainerRef.clear();
        form.forEach(comp => {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp.component);
          const componentRef = viewContainerRef.createComponent(componentFactory);
          (componentRef.instance as FormComponent).data = comp.data;
        });
      }
    }
  }

}