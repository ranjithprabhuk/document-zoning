import { Control } from './../models/control';
import { ControlType } from './../models/control-type';
import { Injectable } from '@angular/core';
import { InputComponent } from '../../components/form-generator/form-components/input';
import { FormItem } from '../models/form-item';
import { DropdownComponent } from '../../components/form-generator/form-components/dropdown';
import { FieldSetEndComponent } from '../../components/form-generator/form-components/fieldsetend';
import { FieldSetStartComponent } from '../../components/form-generator/form-components/fieldsetstart';
import { RadioComponent } from '../../components/form-generator/form-components/radio';

import { ConfigService } from '@shared/services';

@Injectable()
export class FormService {

    form;
    constructor(private configService: ConfigService) {
        this.buildForm();
    }
    // TODO: add logic to convert form data to form items
    buildForm() {
        this.configService.getNonMedicalForm().subscribe( formData => {
            this.form = formData;
        });
    }
    getForm() {
        const formComponents = [];
        let prevFieldset = '';
        let currentFieldset = '';
        let lastControlData;
        this.form.forEach((data) => {
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
