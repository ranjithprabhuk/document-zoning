import { Component, ComponentFactoryResolver, ViewChild, Input } from '@angular/core';
import { FormDirective } from '../form.directive';
import { FormComponent } from '../../shared/models/form';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent {
  @ViewChild(FormDirective) formHost: FormDirective;
  @Input() parentForm: FormGroup;
  @Input() set formConfig(config: any) {
    if (config) {
      this.createReactiveForm(config.settings);
      this.generateForm(config.formComponents);
    }
  }

  childFormGroup;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private formBuilder: FormBuilder) {}

  createReactiveForm(settings) {
    this.childFormGroup = this.formBuilder.group({});
    this.parentForm.addControl( [settings.formGroupName] as any, this.childFormGroup);
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
          (componentRef.instance as FormComponent).parentGroup = this.childFormGroup;
        });
      }
    }
  }
}
