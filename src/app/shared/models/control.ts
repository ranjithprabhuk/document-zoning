import { ControlType } from './control-type';

export class Control {
    public labelText: string;
    public controlType: ControlType;
    public value: any;
    public isRequired: boolean;
    public isEnabled: boolean;

    constructor() {
        this.labelText = '';
        this.controlType = ControlType.NONE;
        this.value = '';
        this.isRequired = false;
        this.isEnabled = false;
    }

    public map(data) {
        this.labelText = '';
        this.controlType = ControlType.INPUT;
        this.value = '';
        this.isRequired = true;
        this.isEnabled = true;
    }
}
