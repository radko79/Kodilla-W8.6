// scripts.js

	var a = prompt('Enter first number'),
		b = prompt('Enter last number');
		value = (a * a) - (2 * a * b) + (b * b);
		alert('The result is: ' + value);
		console.log('The result of the equation a^2 - 2ab + b^2, where a = ' + a + ' and b = ' + b + ' is: ' + value);
		if (value == 0) {
			console.log('Bull\'s eye! The result is 0.');
		} else {
			console.log('Not this time. The result is different than 0.');
		}
	//document.getElementById("result").innerHTML = triangleArea;
	

