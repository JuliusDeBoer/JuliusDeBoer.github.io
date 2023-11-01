<script setup lang="ts">
let frame = 0;
let intervalTimer: NodeJS.Timeout;
const model = new Model();
let buffer = useState("buffer", () => "a");

function update() {
	frame++;
	const textBuffer = new TextBuffer(60, 30);

	model.rotateX(Math.sin(frame / 10) / 10);
	model.rotateY(Math.cos(frame / 9) / 10);
	model.rotateZ(Math.sin(frame / 12) / 10);

	model.draw(textBuffer, { x: 15, y: 15 });
	buffer.value = textBuffer.data.join("\n");
}

model.pushAll([
	new Line(new Vec3(-8, 8, 8), new Vec3(8, 8, 8)),
	new Line(new Vec3(8, 8, 8), new Vec3(8, -8, 8)),
	new Line(new Vec3(8, -8, 8), new Vec3(-8, -8, 8)),
	new Line(new Vec3(-8, -8, 8), new Vec3(-8, 8, 8)),

	new Line(new Vec3(-8, 8, 8), new Vec3(-8, 8, -8)),
	new Line(new Vec3(8, 8, 8), new Vec3(8, 8, -8)),
	new Line(new Vec3(8, -8, 8), new Vec3(8, -8, -8)),
	new Line(new Vec3(-8, -8, 8), new Vec3(-8, -8, -8)),

	new Line(new Vec3(-8, 8, -8), new Vec3(8, 8, -8)),
	new Line(new Vec3(8, 8, -8), new Vec3(8, -8, -8)),
	new Line(new Vec3(8, -8, -8), new Vec3(-8, -8, -8)),
	new Line(new Vec3(-8, -8, -8), new Vec3(-8, 8, -8))
]);

model.rotateY(12);
model.rotateX(-10);
update();

onMounted(() => {
	const reduceMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)"
	).matches;
	if (reduceMotion) {
		return;
	}
	// 15 fps
	intervalTimer = setInterval(update, 66);
});

onBeforeUnmount(() => {
	clearInterval(intervalTimer);
});
</script>

<template>
	<div>
		<span class="font-mono leading-none whitespace-pre">
			{{ buffer }}
		</span>
	</div>
</template>
