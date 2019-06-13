import { Component, AfterContentInit, Input } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import { Pdf, Highlighter } from '@shared/models';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker';

@Component({
  selector: 'app-pdf-highlighter',
  templateUrl: './pdf-highlighter.component.html',
  styleUrls: ['./pdf-highlighter.component.scss']
})
export class PdfHighlighterComponent implements AfterContentInit {
  public width = 0;
  public height = 0;

  private pdfDoc = null;
  private pageNum = 1;
  private pageRendering = false;
  private pageNumPending = null;
  private scale = 0.8;
  private canvas: HTMLCanvasElement = null;
  private ctx = null;

  public highlighter = {};


  @Input() showHighlighter = true;
  @Input() set pdf(pdfInfo: Pdf) {
    if (pdfInfo && pdfInfo.File && pdfInfo.PageNumber) {
      this.pageNum = pdfInfo.PageNumber;
      this.scale = pdfInfo.Scale;
      this.loadPdf(pdfInfo.File);
    }
  }
  @Input() set highlighterConfig(highlighter: Highlighter) {
    this.highlightPdf(highlighter);
  }

  constructor() { }

  public ngAfterContentInit(): void {
    this.canvas = document.getElementById('document-viewer') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
  }

  public renderPage(num): void {
    this.pageRendering = true;

    this.pdfDoc.getPage(num).then((page) => {
      const viewport = page.getViewport(this.scale);
      const { width, height } = viewport;
      this.canvas.height = height;
      this.canvas.width = width;
      this.width = width;
      this.height = height;

      const renderTask = page.render({ canvasContext: this.ctx, viewport });

      renderTask.promise.then(() => {
        this.pageRendering = false;
        if (this.pageNumPending !== null) {
          this.renderPage(this.pageNumPending);
          this.pageNumPending = null;
        }
      });
    });
  }

  public loadPdf(file: Uint8Array): void {
    pdfjsLib.getDocument(file).then((pdfDocument) => {
      this.pdfDoc = pdfDocument;
      this.renderPage(this.pageNum);
    });
  }

  public highlightPdf(highlighter: Highlighter): void {
    this.highlighter = {
      objects: [
        {
          type: 'rect',
          top: -30,
          left: -100,
          width: 200,
          height: 60,
          fill: '#cfcfcf',
          opacity: 0.3,
          ...highlighter
        }
      ]
    };
  }
}
