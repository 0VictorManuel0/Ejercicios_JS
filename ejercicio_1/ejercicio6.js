var object={
    key1:10,
    key2:3,
    key3:40,
    key4:20
}
console.log(object);
let acomodo = Object.values(object).sort((a,b)=>a-b);
console.log(acomodo);