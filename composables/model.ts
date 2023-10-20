import { Line } from "./line";
import { TextBuffer } from "./textBuffer";

export class Model {
	private lines: Line[];

	constructor() {
		this.lines = [];
	}

	push(line: Line) {
		this.lines.push(line);
	}

	pushAll(lines: Line[]) {
		for(const line of lines) {
			this.lines.push(line);
		}
	}

	rotateX(angleInRadians: number) {
		for(let i = 0; i < this.lines.length; i++) {
			this.lines[i].orig.rotateX(angleInRadians);
			this.lines[i].dest.rotateX(angleInRadians);
		}
	}

	rotateY(angleInRadians: number) {
		for(let i = 0; i < this.lines.length; i++) {
			this.lines[i].orig.rotateY(angleInRadians);
			this.lines[i].dest.rotateY(angleInRadians);
		}
	}

	rotateZ(angleInRadians: number) {
		for(let i = 0; i < this.lines.length; i++) {
			this.lines[i].orig.rotateZ(angleInRadians);
			this.lines[i].dest.rotateZ(angleInRadians);
		}
	}

	draw(textBuffer: TextBuffer, offset: { x: number, y: number } = { x: 0, y: 0 }) {
		for(const line of this.lines) {
			line.draw(textBuffer, offset);
		}
	}
}
