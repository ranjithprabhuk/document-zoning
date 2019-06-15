import { ControlType } from '../constants/control-type';

export class Control {
    public labelText: string;
    public controlType: ControlType;
    public formControlName: string;
    public value: any;
    public isRequired: boolean;
    public isEnabled: boolean;

    constructor() {
        this.labelText = '';
        this.controlType = ControlType.NONE;
        this.formControlName = '';
        this.value = '';
        this.isRequired = false;
        this.isEnabled = false;
    }

    public map(data) {
        this.labelText = data.label;
        this.controlType = ControlType[data.type as string];
        this.formControlName = data.formControlName;
        this.value = data.value;
        this.isRequired = true;
        this.isEnabled = true;
    }
}
