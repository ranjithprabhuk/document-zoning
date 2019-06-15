import { Control } from './../models/control';
import { ControlType } from './../models/control-type';
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

import { ConfigService } from '@shared/services';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FormService {

    form;
    mapping = [];
    constructor(private configService: ConfigService) {
        this.getMapping();
    }
    // TODO: add logic to convert form data to form items
    public getForm() {
        return this.configService.getNonMedicalForm().toPromise().then((formData) => {
            return Promise.resolve(this.buildForm(formData));
        });
    }
    private getMapping() {
        if (!this.mapping || this.mapping.length === 0) {
            this.configService.getControlMapping().toPromise().then((value) => {
                this.mapping = value as any[];
            });
        }
    }

    // TODO: add logic to convert form data to form items
    public buildForm(formData) {
        let formComponents = [];
        const groupedFormComponents: any[] = [];
        formData.forEach((formGroup) => {
            const formControls = {};
            formComponents = [];
            const { formElements , ...formGroupProperties } = formGroup;
            formElements.forEach((formElement) => {
                const controldata = new Control(this.mapping);
                controldata.map(formElement);
                formComponents.push(this.getFormItem(controldata));
            });
            const dynamicFormGroup = new FormGroup({
                ...formControls
            });
            groupedFormComponents.push({
                settings: formGroupProperties,
                formComponents
            });
        });

        return groupedFormComponents;
    }

    private getFormItem(controldata): FormItem {
        switch (controldata.controlType) {
            case ControlType.CHECKBOX: return new FormItem(CheckboxComponent, controldata);
            case ControlType.DATE: return new FormItem(DateComponent, controldata);
            case ControlType.DROPDOWN: return new FormItem(DropdownComponent, controldata);
            case ControlType.EMAIL: return new FormItem(EmailComponent, controldata);
            case ControlType.INPUT: return new FormItem(InputComponent, controldata);
            case ControlType.NUMBER: return new FormItem(NumberComponent, controldata);
            case ControlType.RADIO: return new FormItem(RadioComponent, controldata);
            case ControlType.TEL: return new FormItem(TelComponent, controldata);
            case ControlType.TEXTAREA: return new FormItem(TextAreaComponent, controldata);
        }
    }
}
