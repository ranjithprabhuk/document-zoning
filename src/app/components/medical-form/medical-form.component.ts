import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pdf, Highlighter } from '@shared/models';
import { SharedService } from '@shared/shared.service';
import { FormService } from '@shared/services/form.service';

@Component({
  selector: 'app-medical-form',
  templateUrl: './medical-form.component.html',
  styleUrls: ['./medical-form.component.scss']
})
export class MedicalFormComponent implements OnInit, OnDestroy {
  public uploadedFile: Subscription = null;
  public pdfFile: Pdf = null;
  public highlighter: Highlighter = null;
  public formGroups: any = [];

  constructor(
    private sharedService: SharedService,
    private formService: FormService,
  ) {

  }

  public ngOnInit(): void {
    this.getUploadedFile();
    this.formService.getForm().then((data) => {
      this.formGroups = data;
    });
  }

  public getUploadedFile(): void {
    this.uploadedFile = this.sharedService.currentFile.subscribe((file) => {
      if (file) {
        this.loadPdf(file);
        this.setHighlighter();
      }
    });
  }

  public loadPdf(file: Uint8Array): void {
    this.pdfFile = new Pdf();
    this.pdfFile.map(file, 1);
  }

  public setHighlighter(): void {
    this.highlighter = new Highlighter();
    this.highlighter.setPosition(23, 56, 200, 50);
  }

  public ngOnDestroy(): void {
    this.uploadedFile.unsubscribe();
    this.sharedService.updateFile(null);
  }
}
