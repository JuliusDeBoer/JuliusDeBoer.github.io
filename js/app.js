console.info("(*-*)");

var subtitleString = [
	"Software Developer",
	"Software Engineer",
	"Computer Nerd",
	"Programmer",
	"Developer",
	"Coder",
];

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
};

async function typer(text, query) {
	var element = document.querySelectorAll(query)[0];
	var text = text;
	var real_text = "";
	var delay = 90;

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

window.onload = async function() {	
	await typer("Julius", "#title-1");
	await typer("de Boer", "#title-2");
	typer("// " + subtitleString[Math.floor(subtitleString.length * Math.random())], "#subtitle");
};