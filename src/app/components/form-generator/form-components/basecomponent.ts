import { SharedService } from '@shared/shared.service';
import { Input } from '@angular/core';
import { FormComponent } from '../../../shared/models/form';

export class BaseComponent implements FormComponent {

    @Input() data: any;

    constructor(public sharedService: SharedService) {

    }
    public focusFunction() {
        this.sharedService.setCurrentFocus(this.data);
    }

    public focusOutFunction() {
        this.sharedService.setCurrentFocus(null);
    }
}
