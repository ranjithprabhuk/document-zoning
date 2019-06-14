import { ControlType } from './control-type';

export class Control {
    public labelText: string;
    public controlType: ControlType;
    public value: any;
    public isRequired: boolean;
    public isEnabled: boolean;
    public fieldset: string;

    constructor(public dictionary) {
        this.labelText = '';
        this.controlType = ControlType.NONE;
        this.value = '';
        this.isRequired = false;
        this.isEnabled = false;
        this.fieldset = '';
    }

    public map(data) {
        this.labelText = data.label;
        this.controlType = this.GetControlType(data.label);
        this.value = data.value;
        this.isRequired = true;
        this.isEnabled = true;
        this.fieldset = data.fieldset;
    }

    private GetControlType(data: string): ControlType {
        data = data.replace(/ /g, '').toLowerCase();
        const control = this.dictionary[data];
        return ControlType[control as string];
    }
}
