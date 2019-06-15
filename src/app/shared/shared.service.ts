import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
    private uploadedFile = new BehaviorSubject(null);
    public currentFile = this.uploadedFile.asObservable();
    private focus = new BehaviorSubject(null);
    public currentFocus = this.focus.asObservable();

    constructor() { }

    public updateFile(file: Uint8Array) {
        this.uploadedFile.next(file);
    }

    public setCurrentFocus(control) {
        this.focus.next(control);
    }

    public downloadFormData(data) {
        const formdata = JSON.stringify(data);
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/json;charset=UTF-8,' + encodeURIComponent(formdata));
        element.setAttribute('download', 'form-data.json');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click(); // simulate click
        document.body.removeChild(element);
    }

}
