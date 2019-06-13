import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import { SharedService } from '../../shared/shared.service';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker';

@Component({
  selector: 'app-medical-form',
  templateUrl: './medical-form.component.html',
  styleUrls: ['./medical-form.component.scss']
})
export class MedicalFormComponent implements OnInit, AfterContentInit, OnDestroy {
  public pdfDoc = null;
  public pageNum = 1;
  public pageRendering = false;
  public pageNumPending = null;
  public scale = 0.8;
  public canvas: HTMLCanvasElement = null;
  public ctx = null;
  public pdfFile: Subscription = null;

  constructor(
    private sharedService: SharedService,
  ) {

  }

  ngOnInit() {

  }

  ngAfterContentInit(): void {
    this.canvas = document.getElementById('document-viewer') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.getUploadedFile();
  }

  public renderPage(num): void {
    this.pageRendering = true;
    // Using promise to fetch the page
    this.pdfDoc.getPage(num).then((page) => {
      const viewport = page.getViewport(this.scale);
      this.canvas.height = viewport.height;
      this.canvas.width = viewport.width;

      const renderTask = page.render({canvasContext: this.ctx, viewport});

      // Wait for rendering to finish
      renderTask.promise.then(() => {
        this.pageRendering = false;
        if (this.pageNumPending !== null) {
          // New page rendering is pending
          this.renderPage(this.pageNumPending);
          this.pageNumPending = null;
        }
      });
    });
  }

  public getUploadedFile(): void {
    this.pdfFile = this.sharedService.currentFile.subscribe((file) => {
      if (file) {
        this.loadPdf(file);
      }
    });
  }

  public loadPdf(file: Uint8Array): void {
    pdfjsLib.getDocument(file).then((pdfDocument) => {
      this.pdfDoc = pdfDocument;

      // Initial/first page rendering
      this.renderPage(this.pageNum);
    });
  }

  public ngOnDestroy(): void {
    this.pdfFile.unsubscribe();
    this.sharedService.updateFile(null);
  }
}
