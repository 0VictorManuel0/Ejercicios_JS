var numbers = [5,32,43,4];

let nfilter = numbers.filter(function (n) {return n%2 !==0});
console.log(nfilter);

// al hacer el metodo filter(), se recorre el arreglo y la funcion
// extrae los elementos que no sean pares