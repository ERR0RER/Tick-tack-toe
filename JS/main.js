var icon1 = document.getElementById('icon1');
var icon2 = document.getElementById('icon2');
var check = 0;
var button = document.getElementById('btn');
var arrcell = [];
var number = 0;
var win1 = document.getElementById('wincircle');
var win2 = document.getElementById('wincross');
icon2.style.opacity = "0";

for (var i = 0; i < 9; i++) {
	arrcell[i] = document.getElementById('cell' + (i + 1));
}
console.log(arrcell)

function disableButton(button) {
	button.disabled = true;
}

function GameProcess(button) {
	if (check % 2 == 1) {
		button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon circlei" viewBox="0 0 512 512"><circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
	}
	else {
		button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon crossi" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>';
	}
}
function disableAllButtons() {
	arrcell.forEach(function (button) {
		button.disabled = true;
	});
}
function GameWin() {
	if (arrcell[0] == 1 && arrcell[1] == 1 && arrcell[2] == 1) {
		win1.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[3] == 1 && arrcell[4] == 1 && arrcell[5] == 1) {
		win1.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[6] == 1 && arrcell[7] == 1 && arrcell[8] == 1) {
		win1.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[0] == 1 && arrcell[3] == 1 && arrcell[6] == 1) {
		win1.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[1] == 1 && arrcell[4] == 1 && arrcell[7] == 1) {
		win1.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[2] == 1 && arrcell[5] == 1 && arrcell[8] == 1) {
		win1.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[0] == 1 && arrcell[4] == 1 && arrcell[8] == 1) {
		win1.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[2] == 1 && arrcell[4] == 1 && arrcell[6] == 1) {
		win1.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[0] == 0 && arrcell[1] == 0 && arrcell[2] == 0) {
		win2.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[3] == 0 && arrcell[4] == 0 && arrcell[5] == 0) {
		win2.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[6] == 0 && arrcell[7] == 0 && arrcell[8] == 0) {
		win2.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[0] == 0 && arrcell[3] == 0 && arrcell[6] == 0) {
		win2.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[1] == 0 && arrcell[4] == 0 && arrcell[7] == 0) {
		win2.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[2] == 0 && arrcell[5] == 0 && arrcell[8] == 0) {
		win2.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[0] == 0 && arrcell[4] == 0 && arrcell[8] == 0) {
		win2.style.opacity = "1";
		disableAllButtons();
	}
	else if (arrcell[2] == 0 && arrcell[4] == 0 && arrcell[6] == 0) {
		win2.style.opacity = "1";
		disableAllButtons();
	}
}

function database(el) {
	if (check % 2 == 1) {
		arrcell[el - 1] = 0;
	}
	else {
		arrcell[el - 1] = 1;
	}
	number++;
	console.log(arrcell);
	GameWin();
}

function CrossCircle(button) {
	GameProcess(button);
	check++;
	if (check % 2 == 1) {
		icon1.style.opacity = "0";
		icon2.style.opacity = "1";
	}
	else {
		icon1.style.opacity = "1";
		icon2.style.opacity = "0";
	}
	if (check == 2) {
		check -= 2;
	}
	disableButton(button);

}

function reload() {
	location.reload();
}

