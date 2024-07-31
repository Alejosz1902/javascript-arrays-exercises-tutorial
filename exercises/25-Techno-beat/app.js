// Your code here
let lyricsGenerator = (array) => {
    let lyrics ="";
    let count = 0;
    for (let i=0; i<array.length ; i++){
        if (array[i]===0){
            lyrics += 'Boom ';
        } else if (array[i] === 1) {
            lyrics += 'Drop the bass ';
            count ++;
            if (count === 3){
                lyrics += "!!!Break the bass!!! ";
            }
        }
    }
    return lyrics;
}

// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
