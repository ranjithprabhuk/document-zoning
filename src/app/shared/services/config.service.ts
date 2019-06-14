import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

    constructor(private http: HttpClient) {
    }

    public getControlMapping() {
        return this.http.get('./assets/json/control-field-mapping.json');
    }

}
