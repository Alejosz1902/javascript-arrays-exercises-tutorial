function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for (let i=0; i< theArray.length;i++){
		if (typeof(theArray[i])=== 'number'){
			total += theArray[i];
		}
	}
	return total;
}
