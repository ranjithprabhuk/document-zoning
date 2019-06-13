import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
    private uploadedFile = new BehaviorSubject(null);
    currentFile = this.uploadedFile.asObservable();

    constructor() { }

    updateFile(file: Uint8Array) {
        this.uploadedFile.next(file);
    }
}
