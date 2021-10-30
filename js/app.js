console.info("(*-*)");

var script = document.createElement('script');
script.src = "lang.js";
script.type = 'text/javascript';
document.head.appendChild(script);

var lang;

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
};

async function typer(text, query) {
	var element = document.querySelectorAll(query)[0];
	var text = text;
	var real_text = "";
	var delay = 90;

	if(element == null) {
		return;
	}

	for (var i = 0; i < text.length; i++) {
		real_text += text.charAt(i);
		if (i != text.length - 1){
			element.innerHTML = (real_text + "|");
		} else {
			element.innerHTML = real_text;
		}
		await sleep(delay);
	};
};

function loadLang () {
	lang = navigator.language.substr(0, 2);

	lang = "nl"

	if(langdata[lang] == null) {
		console.warn(lang + " is not a supported language, using en");
		lang = "en";
	}
	
	elements = document.querySelectorAll("[data-key]");

	for(let i = 0; i < elements.length; i++) {
		elements[i].textContent = langdata[lang][document.querySelectorAll("[data-key]")[0].getAttribute('data-key')];
	}
}

window.onload = async function() {	
	loadLang();
	await typer("Julius", "#title-1");
	await typer("de Boer", "#title-2");

	subtitleString = langdata[lang]["subtitle"];

	typer("// " + subtitleString[Math.floor(subtitleString.length * Math.random())], "#subtitle");
};