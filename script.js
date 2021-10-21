function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function titleWriter() {
	var element = document.getElementById("title");
	var text = "Julius de Boer";
	var real_text = "";
	var effect = "";
	var effect_len = 4;
	var delay = 75;
	var characters = "!@#$%^&*()-_=+{};:|/,.<>~";

	for (var i = 0; i < effect_len; i++) {
		effect += characters.charAt(Math.floor(Math.random() * characters.length));
		element.innerHTML = effect;
		await sleep(delay);
	}

	for (var i = 0; i < text.length; i++) {
		effect = effect.slice(1, effect.length);
		
		if (real_text.length + effect_len < text.length) {
			effect += characters.charAt(Math.floor(Math.random() * characters.length));
		}

		real_text +=  text.charAt(i);
		element.innerHTML = real_text + effect;

		await sleep(delay);
	}
}