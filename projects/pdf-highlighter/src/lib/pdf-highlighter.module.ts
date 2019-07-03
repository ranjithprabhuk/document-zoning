import { NgModule } from '@angular/core';
import { FabricModule, FABRIC_CONFIG } from 'ngx-fabric-wrapper';

import { PdfHighlighterComponent } from './pdf-highlighter.component';

@NgModule({
  declarations: [PdfHighlighterComponent],
  imports: [
    FabricModule
  ],
  providers: [
    { provide: FABRIC_CONFIG, useValue: {} },
  ],
  exports: [PdfHighlighterComponent]
})
export class PdfHighlighterModule { }
