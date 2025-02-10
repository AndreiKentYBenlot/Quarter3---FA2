function answer(text){
	document.getElementById("answer").innerHTML=text;
}

function sum(num1,num2){
	var sum = num1 + num2;
    answer("The sum of " + num1 + " and " + num2 + " is " + sum);
}

function diff(num1,num2){
	var diff = num1 - num2;
    answer("The difference of " + num1 + " and " + num2 + " is " + diff);
}

function prod(num1,num2){
	var prod = num1 * num2;
    answer("The product of " + num1 + " and " + num2 + " is " + prod);
}

function quot(num1,num2){
	if (num2 !== 0) {
        var quot = num1 / num2;
        answer("The quotient of " + num1 + " and " + num2 + " is " + quot);
    } else {
        answer("Dividing a number by zero is undefined");
    }
}

function mod(num1,num2){
	var mod = num1 % num2;
    answer("The modulus of " + num1 + " and " + num2 + " is " + mod);
}

