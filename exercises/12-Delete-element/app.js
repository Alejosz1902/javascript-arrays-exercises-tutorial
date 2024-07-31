let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
let deletePerson = (text) =>{
    let newArr = people.filter((element)=> element !== text);
    return newArr;
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
