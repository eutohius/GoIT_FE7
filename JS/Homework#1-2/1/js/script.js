/*Написать функцию pow, аналогичную Math.pow, которая должна возводить указанное число в указанную степень. 
Указать число и степень пользователь должен через команду prompt. 
Результат выполнения функции вывести в консоль. 
Работать с целыми числами, большими, меньшими, и равными нулю. 
Бесконечности можно не обрабатывать*/

var number, power;
	number = parseInt(prompt("Please type in a first number."), 10);
	power = parseInt(prompt("Please type in a second number."), 10);

console.log('Result: ' + toPower(number, power));
console.log('Expected: ' + Math.pow(number, power));

function toPower(a, b) {
	if ((isNaN(a) || isNaN(b)) || !(typeof(a) == 'number' || typeof(b) == 'number')) {
		console.log('Invalid argument(s).');
		return NaN;
	}
		else {
		var result = 1;

		if (b >= 0) {
			for (var i = 0; i < b; i++) {
				result *=a;
			}
		}

		else {
			b *= -1;
			for (var i = 0; i < b; i++) {
				result *=a;
			}
			result = 1/result;
		}

		return result;
	}
}