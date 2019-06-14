import { Control } from './../models/control';
import { ControlType } from './../models/control-type';
import { Injectable } from '@angular/core';
import { FormItem } from '../models/form-item';
import {
    InputComponent,
    DropdownComponent,
    RadioComponent,
    FieldSetEndComponent,
    FieldSetStartComponent,
    TextAreaComponent,
    CheckboxComponent,
    DateComponent,
    TelComponent,
    NumberComponent,
    EmailComponent
  } from '../../components/form-generator/form-components/index';

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
            this.mapping = value as [];
        });
    }

    // TODO: add logic to convert form data to form items
    public getForm() {
        const formComponents = [];
        let prevFieldset = '';
        let currentFieldset = '';
        let lastControlData;
        this.form.forEach((data) => {
            const controldata = new Control(this.mapping);
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
        formComponents.push(new FormItem(FieldSetEndComponent, lastControlData));

        return formComponents;
    }
}
