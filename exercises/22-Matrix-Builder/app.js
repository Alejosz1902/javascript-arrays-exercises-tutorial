// Your code here
let matrixBuilder = (number) => {
  let newArrayCol = [];
  for (let i = 0; i < number; i++) {
    let newArrayRow = [];
    for (let k = 0; k < number; k++) {
      let random = Math.floor(Math.random()+0.5);
      newArrayRow.push(random);
    }
    newArrayCol.push(newArrayRow);
  }
  return newArrayCol;
};

// Do not change anything from this line down
console.log(matrixBuilder(5));
