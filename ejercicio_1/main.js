
// El metodo concat fusionar matrices, es decir no modifica lass matrices, 
// si no que devuelvve una nueva matriz
let clientes =['cliente1','cliente2','cliente3' ];
let empleados = ['empleado1', 'empleado2','empleado3'];
let contactosConcat = empleados.concat(clientes);
console.log(contactosConcat);

// El metodo join regresa un arreglo uniendo ambos arreglos, es decir
// guarda el primer arreglo y seguido de eso agrega los elementos del
// segundo arreglo
clientes =['cliente1','cliente2','cliente3' ];
empleados = ['empleado1', 'empleado2','empleado3'];
let contactosJoin = empleados.join(`- ${clientes} -`);
console.log(contactosJoin);

// El metodo splice regresa un nuevo arreglo modificando, eliminando o agregando elementos
// en este caso se agrega el arreglo en la ultima posicion
clientes =['cliente1','cliente2','cliente3' ];
empleados = ['empleado1', 'empleado2','empleado3'];
let contactosSplice = empleados.splice(1,0,clientes);
console.log(contactosSplice);
console.log(empleados);


// El metodo push regresa un arreglo guardando los elementos del primer arreglo enseguida
// coloca el arreglo en la ultima posicion 
clientes =['cliente1','cliente2','cliente3' ];
empleados = ['empleado1', 'empleado2','empleado3'];
let contactosPush = empleados.push(clientes);
console.log(contactosPush);
console.log(empleados);

// 