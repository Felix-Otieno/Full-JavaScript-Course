var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60

console.log(six, sixty);

function productOfArray(array){
	if(array.length === 0) return 1;

	return array.shift() * productOfArray(array);
}
