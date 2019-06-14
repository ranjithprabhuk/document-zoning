import { ControlType } from './control-type';

export class Control {
    public labelText: string;
    public controlType: ControlType;
    public value: any;
    public isRequired: boolean;
    public isEnabled: boolean;

    constructor(public dictionary) {
        this.labelText = '';
        this.controlType = ControlType.NONE;
        this.value = '';
        this.isRequired = false;
        this.isEnabled = false;
    }

    public map(data) {
        this.labelText = data.label;
        this.controlType = this.GetControlType(data.label);
        this.value = data.value;
        this.isRequired = true;
        this.isEnabled = true;
    }

    private GetControlType(data: string): ControlType {
        data = data.replace(/ /g, '').toLowerCase();
        const control = this.dictionary[data];
        return ControlType[control as string];
    }
}
