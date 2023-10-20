export function lerp(v0: number, v1: number, t: number) {
	return ((v1 - v0) * t) + v0;
}

export function normalize(v0: number, v1: number, t: number) {
	return (t - v0) / (v1 - v0);
}
