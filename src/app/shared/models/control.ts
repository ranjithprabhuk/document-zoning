import { ControlType } from './control-type';

export class Control {
    public labelText: string;
    public controlType: ControlType;
    public value: any;
    public isRequired: boolean;
    public isEnabled: boolean;
    public fieldset: string;

    constructor() {
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

        switch (data) {
            case 'name':
            case 'fullname':
            case 'purposeofinsurance':
            case 'first':
            case 'middle':
            case 'last':
            case 'placeofbirth':
            case 'uin':
            case 'cin':
            case 'proposalno':
            case 'bankrefcode':
            case 'stmcode':
            case 'stmbranch':
            case 'panno':
                return ControlType.INPUT;
            case 'email':
                return ControlType.EMAIL;
            case 'country':
            case 'state':
            case 'city':
            case 'nationality':
            case 'countryofresidence':
                return ControlType.DROPDOWN;
            case 'address':
                return ControlType.TEXTAREA;
            case 'pincode':
            case 'age':
            case 'flat/doorno.':
                return ControlType.NUMBER;
            case 'mobile':
            case 'contact':
            case 'phone':
                return ControlType.TEL;
            case 'dateofbirth':
            case 'spousedateofbirth':
                return ControlType.DATE;
            case 'sex':
            case 'gender':
            case 'ageproof':
            case 'idproof':
            case 'addressproof':
            case 'maritalstatus':
            case 'nonunitlinked':
            case 'unitlinked':
            case 'bancassurance':
            case 'employee':
            case 'individual':
                return ControlType.RADIO;
        }

    }
}
