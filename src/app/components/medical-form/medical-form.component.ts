import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pdf } from '@shared/models';
import { SharedService } from '@shared/shared.service';

@Component({
  selector: 'app-medical-form',
  templateUrl: './medical-form.component.html',
  styleUrls: ['./medical-form.component.scss']
})
export class MedicalFormComponent implements OnInit, OnDestroy {
  public uploadedFile: Subscription = null;
  public pdfFile: Pdf = null;

  constructor(
    private sharedService: SharedService,
  ) {

  }

  public ngOnInit(): void {
    this.getUploadedFile();
  }

  public getUploadedFile(): void {
    this.uploadedFile = this.sharedService.currentFile.subscribe((file) => {
      if (file) {
        this.loadPdf(file);
      }
    });
  }

  public loadPdf(file: Uint8Array): void {
    this.pdfFile = new Pdf();
    this.pdfFile.map(file, 1);
  }

  public ngOnDestroy(): void {
    this.uploadedFile.unsubscribe();
    this.sharedService.updateFile(null);
  }
}
