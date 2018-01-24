// scripts.js

	var a = prompt('Enter first number'),
		b = prompt('Enter last number');
		value = (a * a) - (2 * a * b) + (b * b);
		alert('The result is: ' + value);
		console.log('The result of the equation a^2 - 2ab + b^2, where a = ' + a + ' and b = ' + b + ' is: ' + value);
		if (value == 0) {
			console.log('Bull\'s eye! The result is equal to 0.');
		} else if (value < 0) {
			console.log('The result is less then 0.');
		} else {
			console.log('The result is greater then 0.');
		}
	//document.getElementById("result").innerHTML = triangleArea;
	

