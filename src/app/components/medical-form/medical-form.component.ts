import { Component, OnInit } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker';

@Component({
  selector: 'app-medical-form',
  templateUrl: './medical-form.component.html',
  styleUrls: ['./medical-form.component.scss']
})
export class MedicalFormComponent implements OnInit {
  public pdfDoc = null;
  public pageNum = 1;
  public pageRendering = false;
  public pageNumPending = null;
  public scale = 0.8;
  public canvas: HTMLCanvasElement = null;
  public ctx = null;

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterContentInit(): void {
    this.canvas = document.getElementById('document-viewer') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.loadPdf();
  }

  public renderPage(num): void {
    this.pageRendering = true;
    // Using promise to fetch the page
    this.pdfDoc.getPage(num).then((page) => {
      let viewport = page.getViewport(this.scale);

      this.canvas.height = viewport.height;
      this.canvas.width = viewport.width;

      let renderTask = page.render({canvasContext: this.ctx, viewport});

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

  public loadPdf(): void {
    let url = './assets/pdf/sample.pdf';
    pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {
      this.pdfDoc = pdfDoc_;
      // document.getElementById('page_count').textContent = pdfDoc.numPages;

      // Initial/first page rendering
      this.renderPage(this.pageNum);
    });
  }
}
