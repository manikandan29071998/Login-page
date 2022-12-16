import { Component,OnInit,ViewEncapsulation  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormModel, DynamicFormService } from '@ng-dynamic-forms/core';
import { FormService } from './formservice';
import {MessageService} from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss',
    "../../node_modules/primeng/resources/themes/nova/theme.css",
    "../../node_modules/primeng/resources/primeng.min.css",
    "../../node_modules/quill/dist/quill.core.css",
    "../../node_modules/quill/dist/quill.snow.css"
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  
  formModel!: DynamicFormModel;
  formGroup: FormGroup=this.fb.group({});

  constructor(private formService: DynamicFormService, private service:FormService, private fb :FormBuilder, private messageService: MessageService){}

  ngOnInit(): void {
    this.service.getFormFields().subscribe((res:any)=>{
      this.formModel = this.formService.fromJSON(res.data);
      this.formGroup = this.formService.createFormGroup(this.formModel)      
    })
  }

  showSuccess() {
    this.messageService.add({key:"Key1",severity:'success', summary: this.formGroup.value.username, detail: this.formGroup.value.password});
}
}
