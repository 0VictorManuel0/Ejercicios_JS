var object={
    key1:10,
    key2:3,
    key3:40,
    key4:20
}
// se crea una variable la cual guarda el resultado
// el cual contiene el valor de cada lemento ordenado 
// de acuerdo al metodo sort()
console.log(object);
let acomodo = Object.values(object).sort((a,b)=>a-b);
console.log(acomodo);