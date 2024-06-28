//Задача №2
const btn = document.querySelector(".js-button");
function changeButtonText() {
	if (btn.innerHTML === "ON") {
		btn.innerHTML = "OFF";
		btn.classList.add("laptop");
	} else {
		btn.innerHTML = "ON";
		btn.classList.remove("laptop");
	}
}
//Задача №2

//Задача №3
function yourText() {
	let inputValue = myInput.value;
	output.innerHTML += `<p>${inputValue}</p>`;
	myInput.value = "Your name is:";
}
function enter(event) {
	if (event.key === "Enter") {
		yourText();
		event.preventDefault();
	}
}
//Задача №3
