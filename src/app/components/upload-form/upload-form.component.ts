import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SharedService } from '../../shared/shared.service';
import { FormType, FORM_TYPES, STEP_INFORMATION } from '@shared/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  public formTypes: FormType[] = FORM_TYPES;
  public selectedFormType: string = FORM_TYPES[0].value;
  public modalRef: BsModalRef;
  public stepInformations = STEP_INFORMATION;

  @ViewChild('modalTemplate') modalTemplate: TemplateRef<any>;

  constructor(
    private sharedService: SharedService,
    private modalService: BsModalService,
    private router: Router,
  ) {

  }

  ngOnInit() {
  }

  public handleFileUpload(files: FileList): void {
    if (files && files.length > 0) {
      this.validatePdfFile(files.item(0));
    }
  }

  public validatePdfFile(uploadedFile: File): void {
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      this.convertFileIntoArray(uploadedFile);
    } else {
      console.warn(' not a valid PDF');
      // TODO: Pop-up with message
    }
  }

  public convertFileIntoArray(uploadedFile: File): void {
    const fileReader: any = new FileReader();
    fileReader.onload = () => {
      const typedarray = new Uint8Array(fileReader.result);
      this.sharedService.updateFile(typedarray);
      this.openModal(this.modalTemplate);
    };

    fileReader.readAsArrayBuffer(uploadedFile);
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }

  public navigateToForm(): void {
    this.modalRef.hide();
    this.router.navigateByUrl(`/form/${this.selectedFormType}`);
  }

  public cancel(): void {
    this.modalRef.hide();
    // TODO: Need to reset the form
  }
}
