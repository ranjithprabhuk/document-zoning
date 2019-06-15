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
  public highlighter: Highlighter = null;
  public formGroups: any = [];
  public currentFocus: Subscription = null;
  public showHighlighter = false;
  public isPdfLoaded = false;
  public dynamicForm: FormGroup;

  constructor(
    private sharedService: SharedService,
    private formService: FormService,
    private formBuilder: FormBuilder
  ) {

  }

  public ngOnInit(): void {
    this.getUploadedFile();
    this.getCurrentFocus();
    this.getFormInformation();
  }

  private getFormInformation(): void {
    this.formService.getForm().then((data: any) => {
      this.formGroups = data;
      this.dynamicForm = data[0].form;
      console.log('undefinedddd', this.dynamicForm, data);
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
        this.setHighlighter();
        this.pdfFile = { ...this.pdfFile };
        console.log('dsfsdsdsds', this.formService.form.getRawValue());
      } else {
        this.showHighlighter = false;
      }
    });
  }

  private loadPdf(file: Uint8Array): void {
    this.pdfFile = new Pdf();
    this.pdfFile.map(file, 1);
    this.isPdfLoaded = true;
    this.setHighlighter();
  }

  private setHighlighter(): void {
    this.highlighter = new Highlighter();
    this.highlighter.setPosition(Math.floor(Math.random() * (300 - 25 + 1) + 25), Math.floor(Math.random() * (300 - 25 + 1) + 25), 200, 50);
  }

  public ngOnDestroy(): void {
    this.uploadedFile.unsubscribe();
    this.sharedService.updateFile(null);
    this.currentFocus.unsubscribe();
  }
}
