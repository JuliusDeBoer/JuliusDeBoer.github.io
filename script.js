function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function titleSequence() {
	await titleAnim();
	subtitleAnim();
}

async function titleAnim() {
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

async function subtitleAnim() {
	var element = document.getElementById("subtitle");
	var text = "Welkom!";
	var real_text = "";
	var delay = 75;

	for (var i = 0; i < text.length; i++) {
		real_text += text.charAt(i);
		if (i != text.length - 1){
			element.innerHTML = real_text + "<";
		} else {
			element.innerHTML = real_text;
		}
		await sleep(delay);
	}
}