import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { DynamicInputModel } from '@ng-dynamic-forms/core';

@Injectable({
    providedIn:'root'
})
export class FormService{
    constructor(private http:HttpClient){}

    getFormFields(): Observable<DynamicInputModel>{
        return this.http.get<DynamicInputModel>('assets/formfields.model.json');
    }
}