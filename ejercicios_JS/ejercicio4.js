let people = [
    { name: "bob", id : 1 }, 
    { name: "john", id : 2 },
    { name: "alex", id : 3 }, 
    { name: "john", id : 3 }
];

// Se llama la función
numVecesNombre(people)

// Se le pasa el arreglo de objeto a la funcion
// la cual realiza un recorrido, obteniendo los elementos, 
// y estos a su vez nos permiten obtener el nombre
// el cual se guarda en un arreglo para recorrerlo
// y obtener el numero de veces que aparece un nombre
// en todo el arreglo
function numVecesNombre(params) {
    let nombresRepetidos=[];
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        nombresRepetidos.push(element.name);
    }
    let result={};
    nombresRepetidos.forEach((value)=>{
        result[value]=(result[value]||0)+1;
    });
    console.log(result);
}