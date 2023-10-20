export class TextBuffer {
	width: number;
	height: number;
	data: string[];

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;

		this.data = [];
		for(let i = 0; i <= height; i++) {
			this.data.push(" ".repeat(width));
		}
	}

	public set(x: number, y: number, char: string) {
		if(char.length !== 1) {
			return;
		}

		if(x < 0 || x > this.width || y < 0 || y > this.height) {
			return;
		}

		x = Math.round(x);
		y = Math.round(y);

		this.data[y] = this.data[y].substring(0, x) + char + this.data[y].substring(x + char.length);
	}
};
