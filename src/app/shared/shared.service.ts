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


}
