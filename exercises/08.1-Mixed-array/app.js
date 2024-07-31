let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let types =[];
for (let i=0;i<mix.length;i++){
    types.push(typeof(mix[i]));
}
console.log(types);