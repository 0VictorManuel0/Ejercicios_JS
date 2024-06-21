let myArray = [1,2,9,3,4];

let min = myArray[0];

// se llama a la funcion menor
menor(myArray);

// se realiza de 2 formas, recorriendo el array y
// y haciendo una condicional en la cual el numero menor 
// se guarda en una variable la cual se imprime al final
// la segunda forma es usando em metodo Math.min
function menor(myArray) {
    // for (let i = 0; i < myArray.length; i++) {
    //     if (myArray[i]<min) {
    //         min=myArray[i]
    //     }
    // }
    // console.log(`el valor minimo es ${min}`);
    let min = Math.min(...myArray);
    console.log(min);
}

// se llama a la funcion mayor
mayor(myArray);
// se realiza de 2 formas, recorriendo el array y
// y haciendo una condicional en la cual el numero mayor 
// se guarda en una variable la cual se imprime al final
// la segunda forma es usando em metodo Math.max
function mayor(myArray) {
    // for (let i = 0; i < myArray.length; i++) {
    //     if (myArray[i]>min) {
    //         min=myArray[i]
    //     }
    // }
    // console.log(`el valor minimo es ${min}`);
    let min = Math.max(...myArray);
    console.log(min);
}