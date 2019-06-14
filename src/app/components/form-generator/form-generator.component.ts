import { Component, ComponentFactoryResolver, ViewChild, Input } from '@angular/core';
import { FormDirective } from '../form.directive';
import { FormComponent } from '../../shared/models/form';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent {
  @ViewChild(FormDirective) formHost: FormDirective;
  @Input() set formConfig(config: any[]) {
    if (config && config.length > 0) {
      this.generateForm(config);
    }
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }


  public generateForm(form): void {
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
