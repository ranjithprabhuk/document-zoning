import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
  ) {

  }

  ngOnInit() {
  }

  public handleFileUpload(files: FileList): void {
    if (files && files.length > 0) {
      this.validatePdfFile(files.item(0));
    }
  }

  public validatePdfFile(uploadedFile: File): void {
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      this.convertFileIntoArray(uploadedFile);
    } else {
      console.warn(' not a valid PDF');
      // TODO: Pop-up with message
    }
  }

  public convertFileIntoArray(uploadedFile: File): void {
    const fileReader: any = new FileReader();
    fileReader.onload = () => {
      const typedarray = new Uint8Array(fileReader.result);
      this.sharedService.updateFile(typedarray);
    };

    fileReader.readAsArrayBuffer(uploadedFile);
  }

}
