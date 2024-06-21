var people = [
    {
        id: 1,
        name: "John",
        age: 28
    }, 
    {
        id: 2,
        name: "Jane",
        age: 31
    }, 
    {
        id: 3,
        name: "Peter",
        age: 55 
    }
];
//se manda a llamar la funcion, pasando como argumento el arreglo
edadMenor35(people);

// se declara la funcion, y se realiza un recorrido al arreglo obtenido para conocer
// la longitud y en base a eso hacer una comparacion si la edad es menor a 35
// se imprime el nombre de la persona
function edadMenor35(params) {
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if (element.age<35) {
            console.log(element.name);
        }
    }
}