<script lang="ts">
let frame = 0;
let intervalTimer: NodeJS.Timeout;
const model = new Model();

export default {
	data() {
		return {
			buffer: ''
		}
	},
	methods: {
		update() {
			frame++;
			const textBuffer = new TextBuffer(60, 30);

			model.rotateX(Math.sin(frame / 10) / 10);
			model.rotateY(Math.cos(frame / 9) / 10);
			model.rotateZ(Math.sin(frame / 12) / 10);

			model.draw(textBuffer, { x: 15, y: 15 });
			this.buffer = textBuffer.data.join("\n");
		}
	},
	created() {
		model.pushAll([
			new Line(new Vec3(-8,  8,  8), new Vec3( 8,  8,  8)),
			new Line(new Vec3( 8,  8,  8), new Vec3( 8, -8,  8)),
			new Line(new Vec3( 8, -8,  8), new Vec3(-8, -8,  8)),
			new Line(new Vec3(-8, -8,  8), new Vec3(-8,  8,  8)),

			new Line(new Vec3(-8,  8,  8), new Vec3(-8,  8, -8)),
			new Line(new Vec3( 8,  8,  8), new Vec3( 8,  8, -8)),
			new Line(new Vec3( 8, -8,  8), new Vec3( 8, -8, -8)),
			new Line(new Vec3(-8, -8,  8), new Vec3(-8, -8, -8)),

			new Line(new Vec3(-8,  8, -8), new Vec3( 8,  8, -8)),
			new Line(new Vec3( 8,  8, -8), new Vec3( 8, -8, -8)),
			new Line(new Vec3( 8, -8, -8), new Vec3(-8, -8, -8)),
			new Line(new Vec3(-8, -8, -8), new Vec3(-8,  8, -8))
		]);

		model.rotateY(12);
		model.rotateX(-10);
		this.update();
	},
	mounted() {
		// 12 fps
		// intervalTimer = setInterval(this.update, 83.33);

		// 15 fps
		intervalTimer = setInterval(this.update, 66);

		// 60 fps
		// intervalTimer = setInterval(this.update, 16.66);
	},
	beforeDestroy() {
		clearInterval(intervalTimer);
	}
};
</script>

<template>
	<div>
		<div class="bg-black text-white w-fit">
			<span class="font-mono leading-none whitespace-pre">
				{{ buffer }}
			</span>
		</div>
	</div>
</template>
