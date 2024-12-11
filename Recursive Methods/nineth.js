var l = [1,2,3]; 
console.log(SumSquares(l)); // 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 400

function SumSquares(array){
	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}
