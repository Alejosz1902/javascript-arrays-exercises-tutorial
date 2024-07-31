let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
let transform = (number) => {
    if (number === 1){
        return 'wiki'
    } else if (number === 0){
        return 'woko'
    }
}

let newArray = theBools.map(transform);
console.log(newArray);