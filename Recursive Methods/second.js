let output = sumRange(3)
console.log(output);

function sumRange(num){
	if(num == 1) return 1;

	return num + sumRange(num - 1);
}