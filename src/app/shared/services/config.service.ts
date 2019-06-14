import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getNonMedicalForm(): Observable<any> {
    const url = 'assets/json/non-medical-form.json';
    return this.http.get(url);
  }
  public getControlMapping() {
    return this.http.get('./assets/json/control-field-mapping.json');
  }
}
