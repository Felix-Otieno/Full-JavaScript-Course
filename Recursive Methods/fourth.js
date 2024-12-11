console.log(factorial(5)); // 120

function factorial(num){
	if(num == 1) return 1;

	return num * factorial(num - 1); // pending multiplier
}