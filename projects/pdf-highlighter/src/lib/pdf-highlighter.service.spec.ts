import { TestBed } from '@angular/core/testing';

import { PdfHighlighterService } from './pdf-highlighter.service';

describe('PdfHighlighterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfHighlighterService = TestBed.get(PdfHighlighterService);
    expect(service).toBeTruthy();
  });
});
