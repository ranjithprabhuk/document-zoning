import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pdf, Highlighter } from '@shared/models';
import { SharedService } from '@shared/shared.service';
import { FormService } from '@shared/services/form.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  public uploadedFile: Subscription = null;
  public pdfFile: any = null;
  public highlighter: any = null;
  public formGroups: any = [];
  public form: FormGroup;
  public currentFocus: Subscription = null;
  public showHighlighter = false;
  public isPdfLoaded = false;

  constructor(private sharedService: SharedService, private formService: FormService, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({});
    this.getUploadedFile();
    this.getCurrentFocus();
    this.getFormInformation();
  }

  private getFormInformation(): void {
    this.formService.getForm().then((data) => {
      this.formGroups = data;
    });
  }

  private getUploadedFile(): void {
    this.uploadedFile = this.sharedService.currentFile.subscribe((file) => {
      if (file) {
        this.loadPdf(file);
      }
    });
  }

  private getCurrentFocus(): void {
    this.currentFocus = this.sharedService.currentFocus.subscribe((control) => {
      if (control && this.isPdfLoaded) {
        this.showHighlighter = true;
        this.setHighlighter(control);
        this.pdfFile = { ...this.pdfFile, PageNumber: control.highlighter.pageNumber };
      } else {
        this.showHighlighter = false;
      }
    });
  }

  private loadPdf(file: Uint8Array): void {
    this.pdfFile = new Pdf();
    this.pdfFile.map(file, 1);
    this.isPdfLoaded = true;
  }

  private setHighlighter(control): void {
    this.highlighter = new Highlighter();
    if (control) {
      const { top, left, width, height } = control.highlighter;
      this.highlighter = {...this.highlighter, top, left, width, height };
    }
  }

  public onSave() {
    this.sharedService.downloadFormData(this.form.value);
  }

  public onDownload() {
    this.sharedService.downloadFormData(this.form);
  }

  public ngOnDestroy(): void {
    this.uploadedFile.unsubscribe();
    this.sharedService.updateFile(null);
    this.currentFocus.unsubscribe();
  }
}
