const countSmallerNumbers = (array) => {

	let returnArray = [];
	
	for(let i = 0; i < array.length; i++){
		
		let count = 0;
		
		for(let j = i + 1; j < array.length; j++){
			if(array[i] > array[j]) count++
		}
		
		returnArray.push(count);
	}
	
	return returnArray;
}

console.log(`New Array: [${countSmallerNumbers([6,2,5,8])}]`)
