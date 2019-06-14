import { ControlType } from '../constants/control-type';

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

    public map(data, dictionary) {
        this.labelText = data.label;
        this.controlType = this.GetControlType(data.label, dictionary);
        this.value = data.value;
        this.isRequired = true;
        this.isEnabled = true;
    }

    private GetControlType(data: string, dictionary): ControlType {
        data = data.replace(/ /g, '').toLowerCase();
        const control = dictionary[data];
        return ControlType[control as string];
    }
}
