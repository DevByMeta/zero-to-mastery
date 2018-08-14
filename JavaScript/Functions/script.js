/* Function Declaration */

function sayHello() {
	console.log("Hello");
}

// sayHello();

/* Function Expression */

var sayBye = function() { /* Anonymous Function */
	console.log("Bye");
}

// sayBye();

/* Arguments in Functions */

function sing(song /* <--- JavaScript Function Argument */) {
	console.log(song);
}

/* sing("Laaaa Deeeee Daaaaa");
sing("Hellllloooooo");
sing("Backstreets Back Alright"); */

function multiply(a, b /* <--- JavaScript Function Arguments */) {
	if (a > 10 || b > 10) {
		return "That's way too hard to calculate...";
	} else {
		return a * b;
	}
}

/* Exercise 5 */

/* 1. */ function checkDriverAge() {
	var age = prompt("What is your age?");

	if (Number(age) < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

/* 2. */ var checkDriverAge2 = function() {
	var age = prompt("What is your age?");

	if (Number(age) < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

/* 1.Bonus */ function checkDriverAgeBonus(age) {
 
	if (Number(age) < 18) {
		return "Sorry, you are too young to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}
