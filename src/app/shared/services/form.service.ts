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


@Injectable()
export class FormService {
    // TODO: add logic to convert form data to form items
    getForm() {
        let formComponents = [];
        const groupedFormComponents: any[] = [];
        const formdata = [
            {
                formGroup: 'Form Details',
                formGroupId: 'formDetails',
                formElements: [
                    { label: 'Non Unit Linked', value: '', fieldset: 'Form Details' },
                    { label: 'Unit Linked', value: '', fieldset: 'Form Details' },
                    { label: 'UIN', value: '', fieldset: 'Form Details' },
                    { label: 'CIN', value: 'U62347543ABCFDA87', fieldset: 'Form Details' },
                ]
            },
            {
                formGroup: 'Agent Details',
                formGroupId: 'formDetails',
                formElements: [
                    { label: 'Proposal No', value: '', fieldset: 'Agent Details' },
                    { label: 'Bank Ref Code', value: '', fieldset: 'Agent Details' },
                    { label: 'STM Code', value: '', fieldset: 'Agent Details' },
                    { label: 'STM Branch', value: '', fieldset: 'Agent Details' },
                    { label: 'Employee', value: '', fieldset: 'Agent Details' },
                    { label: 'Individual', value: '', fieldset: 'Agent Details' },
                    { label: 'Bancassurance', value: '', fieldset: 'Agent Details' },
                    { label: 'Unit Linked', value: '', fieldset: 'Agent Details' }
                ]
            },
        ];

        formdata.forEach((data) => {
            formComponents = [];
            data.formElements.forEach((formElements) => {
                const controldata = new Control();
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
