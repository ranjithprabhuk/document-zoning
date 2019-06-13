export class Pdf {
    File: Uint8Array;
    PageNumber: number;
    Scale: number;

    constructor() {
        this.File = null;
        this.PageNumber = 1;
        this.Scale = 0.8;
    }

    map(file: Uint8Array, pageNumber: number, scale: number = 0.8): void {
        this.File = file;
        this.PageNumber = pageNumber;
        this.Scale = scale
    }

    setPageNumber(pageNumber: number): void {
        this.PageNumber = pageNumber;
    }
}