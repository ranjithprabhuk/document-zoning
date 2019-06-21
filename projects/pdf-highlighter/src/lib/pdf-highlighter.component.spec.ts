import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfHighlighterComponent } from './pdf-highlighter.component';

describe('PdfHighlighterComponent', () => {
  let component: PdfHighlighterComponent;
  let fixture: ComponentFixture<PdfHighlighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfHighlighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
