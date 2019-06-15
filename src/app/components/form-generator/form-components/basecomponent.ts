import { SharedService } from '@shared/shared.service';
import { Input } from '@angular/core';
import { FormComponent } from '../../../shared/models/form';
import { FormGroup, FormBuilder } from '@angular/forms';

export class BaseComponent implements FormComponent {
    public formValue: FormGroup;

    @Input() formGroup: FormGroup;

    @Input() data: any;

    constructor(public sharedService: SharedService, public formBuilder: FormBuilder) {

    }

    public initializeForm(parentForm: FormGroup): void {
        const formValue: FormGroup = this.formBuilder.group({
            [this.data.formControlName]: [this.data.value]
        });
        parentForm.addControl('formValue', formValue);
        this.formValue = parentForm.controls['formValue'] as FormGroup
        console.log('kskjdksjdksjdkjskdjksjdksjd', this.formValue);
    }

    public focusFunction() {
        this.sharedService.setCurrentFocus(this.data);
    }

    public focusOutFunction() {
        this.sharedService.setCurrentFocus(null);
    }
}
