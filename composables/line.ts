import { lerp, normalize } from "./math";
import { TextBuffer } from "./textBuffer";
import { Vec3 } from "./vec3";

const DEPTH_MOD = 0.03;
const X_MODIFIER = 2;

export class Line {
	public orig: Vec3;
	public dest: Vec3;

	constructor(orig: Vec3, dest: Vec3) {
		this.orig = orig;
		this.dest = dest;
	}
	
	draw(textBuffer: TextBuffer, offset: { x: number, y: number } = { x: 0, y: 0 }) {
		let xLen = this.dest.x - this.orig.x;
		let yLen = this.dest.y - this.orig.y;
		if(xLen < 0) { xLen *= -1; }
		if(yLen < 0) { yLen *= -1; }

		if(xLen > yLen) {
			const isOrigLess = this.orig.x < this.dest.x;
			for(let x = this.orig.x; isOrigLess ? x <= this.dest.x : x >= this.dest.x; isOrigLess ? x++ : x--) {
				const t = normalize(this.orig.x, this.dest.x, x);
				const y = lerp(this.orig.y, this.dest.y, t);
				const z = lerp(this.orig.z, this.dest.z, t);

				let char = "%";

				if(z < -5) { char = "-"; }
				else if(z < -0) { char = "~"; }
				else if(z < 5) { char = "="; }

				textBuffer.set(((x / (1 - z * DEPTH_MOD)) + offset.x) * X_MODIFIER, (y / (1 - z * DEPTH_MOD)) + offset.y, char);
			}
		} else {
			const isOrigLess = this.orig.y < this.dest.y;
			for(let y = this.orig.y; isOrigLess ? y <= this.dest.y : y >= this.dest.y; isOrigLess ? y++ : y--) {
				const t = normalize(this.orig.y, this.dest.y, y);
				const x = lerp(this.orig.x, this.dest.x, t);
				const z = lerp(this.orig.z, this.dest.z, t);

				let char = "%";

				if(z < -5) { char = ":"; }
				else if(z < -0) { char = "|"; }
				else if(z < 5) { char = "/"; }

				textBuffer.set(((x / (1 - z * DEPTH_MOD)) + offset.x) * X_MODIFIER, (y / (1 - z * DEPTH_MOD)) + offset.y, char);
			}
		}
	}
};
