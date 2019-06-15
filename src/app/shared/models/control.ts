import { ControlType } from '../constants/control-type';

export class Control {
    public labelText: string;
    public formControlName: string;
    public controlType: ControlType;
    public value: any;
    public isRequired: boolean;
    public isEnabled: boolean;
    public highlighter:  any = null;

    constructor() {
        this.labelText = '';
        this.controlType = ControlType.NONE;
        this.formControlName = '';
        this.value = '';
        this.isRequired = false;
        this.isEnabled = false;
        this.highlighter = null;
    }

    public map(data) {
        this.labelText = data.label;
        this.formControlName = data.formControlName;
        this.controlType = ControlType[data.type as string];
        this.value = data.value;
        this.isRequired = true;
        this.isEnabled = true;
        this.highlighter = data.highlighter;
    }
}
