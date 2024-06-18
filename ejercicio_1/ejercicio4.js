let people = [
    { name: "bob", id : 1 }, 
    { name: "john", id : 2 },
    { name: "alex", id : 3 }, 
    { name: "john", id : 3 }
];
numVecesNombre(people)

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