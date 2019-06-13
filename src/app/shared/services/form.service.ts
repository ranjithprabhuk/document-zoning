import { Control } from './../models/control';
import { ControlType } from './../models/controlType';
import { Injectable } from '@angular/core';
import { InputComponent } from '../../components/form-generator/form-components/input';
import { FormItem } from '../models/form-item';
import { DropdownComponent } from '../../components/form-generator/form-components/dropdown';
import { FieldSetEndComponent } from '../../components/form-generator/form-components/fieldsetend';
import { FieldSetStartComponent } from '../../components/form-generator/form-components/fieldsetstart';
import { RadioComponent } from '../../components/form-generator/form-components/radio';


@Injectable()
export class FormService {
    // TODO: add logic to convert form data to form items
    getForm() {
        const formComponents = [];
        const formdata = [
            { label: 'Non Unit Linked', value: '', fieldset: 'Form Details' },
            { label: 'Unit Linked', value: '', fieldset: 'Form Details' },
            { label: 'UIN', value: '', fieldset: 'Form Details' },
            { label: 'CIN', value: 'U62347543ABCFDA87', fieldset: 'Form Details' },
            { label: 'Proposal No', value: '', fieldset: 'Agent Details' },
            { label: 'Bank Ref Code', value: '', fieldset: 'Agent Details' },
            { label: 'STM Code', value: '', fieldset: 'Agent Details' },
            { label: 'STM Branch', value: '', fieldset: 'Agent Details' },
            { label: 'Employee', value: '', fieldset: 'Agent Details' },
            { label: 'Individual', value: '', fieldset: 'Agent Details' },
            { label: 'Bancassurance', value: '', fieldset: 'Agent Details' },
            { label: 'Unit Linked', value: '', fieldset: 'Agent Details' }];
        let prevFieldset = '';
        let currentFieldset = '';
        let lastControlData;
        formdata.forEach((data) => {
            const controldata = new Control();
            lastControlData = controldata;
            let formitem;
            controldata.map(data);
            currentFieldset = controldata.fieldset;
            if (prevFieldset === '' || prevFieldset !== currentFieldset) {
                if (prevFieldset !== '') {
                    formComponents.push(new FormItem(FieldSetEndComponent, controldata));
                }
                formComponents.push(new FormItem(FieldSetStartComponent, controldata));
            }
            prevFieldset = currentFieldset;
            switch (controldata.controlType) {
                case ControlType.CHECKBOX:
                    break;
                case ControlType.DATE:
                    break;
                case ControlType.DROPDOWN:
                    formitem = new FormItem(DropdownComponent, controldata);
                    break;
                case ControlType.EMAIL:
                    break;
                case ControlType.INPUT:
                    formitem = new FormItem(InputComponent, controldata);
                    break;
                case ControlType.NONE:
                    break;
                case ControlType.NUMBER:
                    break;
                case ControlType.RADIO:
                    formitem = new FormItem(RadioComponent, controldata);
                    break;
                case ControlType.TEL:
                    break;
                case ControlType.TEXTAREA:
                    break;
            }
            formComponents.push(formitem);
        });
        formComponents.push(new FormItem(FieldSetEndComponent, lastControlData));

        return formComponents;
    }
}
