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
} from '../../components/form-generator/form-components/index';


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
        let prevFieldset = '';
        let currentFieldset = '';
        let lastControlData;
        formdata.forEach((data) => {
            formComponents = [];
            data.formElements.forEach((formElements) => {
                const controldata = new Control();
                lastControlData = controldata;
                let formitem;
                controldata.map(formElements);
                currentFieldset = controldata.fieldset;

                switch (controldata.controlType) {
                    case ControlType.CHECKBOX:
                        formitem = new FormItem(CheckboxComponent, controldata);
                        break;
                    case ControlType.DATE:
                        formitem = new FormItem(DateComponent, controldata);
                        break;
                    case ControlType.DROPDOWN:
                        formitem = new FormItem(DropdownComponent, controldata);
                        break;
                    case ControlType.EMAIL:
                        formitem = new FormItem(EmailComponent, controldata);
                        break;
                    case ControlType.INPUT:
                        formitem = new FormItem(InputComponent, controldata);
                        break;
                    case ControlType.NONE:
                        console.log('Unknown Control Type : ', controldata);
                        break;
                    case ControlType.NUMBER:
                        formitem = new FormItem(NumberComponent, controldata);
                        break;
                    case ControlType.RADIO:
                        formitem = new FormItem(RadioComponent, controldata);
                        break;
                    case ControlType.TEL:
                        formitem = new FormItem(TelComponent, controldata);
                        break;
                    case ControlType.TEXTAREA:
                        formitem = new FormItem(TextAreaComponent, controldata);
                        break;
                }
                formComponents.push(formitem);
            });
            groupedFormComponents.push({
                header: data.formGroup,
                formComponents
            })
        });

        return groupedFormComponents;
    }
}
