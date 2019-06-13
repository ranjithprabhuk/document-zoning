import { Injectable } from '@angular/core';
import { InputComponent } from '../../components/form-generator/form-components/input';
import { FormItem } from '../models/form-item';
import { DropdownComponent } from '../../components/form-generator/form-components/dropdown';

@Injectable()
export class FormService {
    // TODO: add logic to convert form data to form items
    getForm() {
        return [
            new FormItem(InputComponent, { labelText: 'Full Name', value: 'Banibrata Roy', type: 'input' }),
            new FormItem(DropdownComponent, { labelText: 'Country', options: ['India', 'Pak'] }),
            new FormItem(InputComponent, { labelText: 'Full Name', value: 'Banibrata Roy', type: 'input' })
        ];
    }
}
