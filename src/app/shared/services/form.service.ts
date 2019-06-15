import { Control } from './../models/control';
import { ControlType } from '../constants/control-type';
import { Injectable } from '@angular/core';
import { FormItem } from '../models/form-item';
import {
    InputComponent,
    DropdownComponent,
    RadioComponent,
    TextAreaComponent,
    CheckboxComponent,
    DateComponent,
    TelComponent,
    NumberComponent,
    EmailComponent
} from '../../components/form-generator/form-components';
import { ConfigService } from './config.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class FormService {

    form;
    mapping = [];
    constructor(private configService: ConfigService, private formBuilder: FormBuilder) {
    }
    // TODO: add logic to convert form data to form items
    public getForm(formType: string = 'nonMedical') {
        return this.configService.getNonMedicalForm().toPromise().then((formData) => {
            return Promise.resolve(this.buildForm(formData, formType));
        });
    }

    // TODO: add logic to convert form data to form items
    public buildForm(formData, formType: string) {
        this.form = this.formBuilder.group({
            [formType]: [],
        });
        let formComponents = [];
        const groupedFormComponents: any[] = [];

        formData.forEach((data) => {
            formComponents = [];
            const parentForm: FormGroup = this.formBuilder.group({
                [data.formGroupName]: []
            });
            this.form.addControl('parentForm', parentForm);
            this.form.controls['parentForm'] as FormGroup;
            data.formElements.forEach((formElements) => {
                const controldata = new Control();
                const formGroup: FormGroup = this.formBuilder.group({
                    [formElements.formControlName]: [formElements.value]
                });
                parentForm.addControl('formGroup', formGroup);
                parentForm.controls['formGroup'] as FormGroup;
                controldata.map(formElements);
                formComponents.push(this.getFormItem(controldata, formGroup));
            });
            groupedFormComponents.push({
                header: data.formGroupTitle,
                formComponents,
                form: this.form,
                parentForm
            });
        });

        return groupedFormComponents;
    }

    private getFormItem(controldata, formGroup: FormGroup): FormItem {
        switch (controldata.controlType) {
            case ControlType.CHECKBOX: return new FormItem(CheckboxComponent, controldata, formGroup);
            case ControlType.DATE: return new FormItem(DateComponent, controldata, formGroup);
            case ControlType.DROPDOWN: return new FormItem(DropdownComponent, controldata);
            case ControlType.EMAIL: return new FormItem(EmailComponent, controldata);
            case ControlType.INPUT: return new FormItem(InputComponent, controldata, formGroup);
            case ControlType.NUMBER: return new FormItem(NumberComponent, controldata);
            case ControlType.RADIO: return new FormItem(RadioComponent, controldata);
            case ControlType.TEL: return new FormItem(TelComponent, controldata);
            case ControlType.TEXTAREA: return new FormItem(TextAreaComponent, controldata);
        }
    }
}
