export class Highlighter {
    type: string;
    top: number;
    left: number;
    width: number;
    height: number;
    fill: string;
    opacity: number;

    constructor() {
        this.type = 'rect';
        this.top = -30;
        this.left = -100;
        this.width = 200;
        this.height = 60;
        this.fill = '#cfcfcf';
        this.opacity = 0.3;
    }

    setPosition(top: number, left: number, width: number, height: number): void {
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    }
}