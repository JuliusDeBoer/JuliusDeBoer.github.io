export class Vec3 {
	x: number;
	y: number;
	z: number;

	constructor(x: number, y: number, z: number) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	rotateX(angleInRadians: number) {
    const cos = Math.cos(angleInRadians);
    const sin = Math.sin(angleInRadians);
    const newY = this.y * cos - this.z * sin;
    const newZ = this.y * sin + this.z * cos;
    this.y = newY;
    this.z = newZ;
	}

	rotateY(angleInRadians: number) {
    const cos = Math.cos(angleInRadians);
    const sin = Math.sin(angleInRadians);
    const newX = this.x * cos + this.z * sin;
    const newZ = -this.x * sin + this.z * cos;
    this.x = newX;
    this.z = newZ;
	}

	rotateZ(angleInRadians: number) {
    const cos = Math.cos(angleInRadians);
    const sin = Math.sin(angleInRadians);
    const newX = this.x * cos - this.y * sin;
    const newY = this.x * sin + this.y * cos;
    this.x = newX;
    this.y = newY;
	}
}
