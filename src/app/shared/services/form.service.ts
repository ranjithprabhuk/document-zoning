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

@Injectable()
export class FormService {

    form;
    mapping = [];
    constructor(private configService: ConfigService) {
        this.buildForm();
        this.getMapping();
    }
    // TODO: add logic to convert form data to form items
    buildForm() {
        this.configService.getNonMedicalForm().subscribe( formData => {
            this.form = formData;
        });
    }
    private getMapping() {
        this.configService.getControlMapping().subscribe((value) => {
            this.mapping = value as any[];
        });
    }

    // TODO: add logic to convert form data to form items
    getForm() {
        let formComponents = [];
        const groupedFormComponents: any[] = [];

        this.form.forEach((data) => {
            formComponents = [];
            data.formElements.forEach((formElements) => {
                const controldata = new Control(this.mapping);
                controldata.map(formElements);
                formComponents.push(this.getFormItem(controldata));
            });
            groupedFormComponents.push({
                header: data.formGroup,
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
