var personArr=[
    {
        "personId":123,
        "name":"Jhon",
        "city": "Melbourne",
        "phoneNo":"1234567890"
    },
    {
        "personId":124,
        "name":"Amelia",
        "city": "Sydney",
        "phoneNo":"1234567890"
    },
    {
        "personId":125,
        "name":"Emily",
        "city": "Perth",
        "phoneNo":"1234567890"
    },
    {
        "personId":126,
        "name":"Abraham",
        "city": "Perth",
        "phoneNo":"1234567890"
    }
    
];


init(personArr); //llamar la funcion


function init(personArr) { //pasarle los argumentos a la funcion
    let contenedor = document.querySelector("body"); //se guarda la tag del body en una etiqueta
    let tabla = document.createElement("table");//se guarda la tag tabla que se creara en una variable
    for (let i = 0; i < personArr.length; i++) {// se recorre el array de personas
        
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let thText = document.createTextNode(`persona${[i+1]}`);// se crea el titulo de persona 
        
        th.appendChild(thText);
        tr.appendChild(th);

        td = document.createElement("td")
        tdText = document.createTextNode(`${personArr[i].name}`); // se le asigna a una columna los nombres de las personas
        td.appendChild(tdText);
        tr.appendChild(td);

        td = document.createElement("td")
        tdText = document.createTextNode(`${personArr[i].personId}`);// se le asigna a una columna el id de las personas
        td.appendChild(tdText);
        tr.appendChild(td);

        td = document.createElement("td")
        tdText = document.createTextNode(`${personArr[i].city}`);// se le asigna a una columna las ciudades de las personas
        td.appendChild(tdText);
        tr.appendChild(td);

        td = document.createElement("td")
        tdText = document.createTextNode(`${personArr[i].phoneNo}`);// se le asigna a una columna los n° de telefono de las personas
        td.appendChild(tdText);
        tr.appendChild(td);


        tabla.appendChild(tr);
        contenedor.appendChild(tabla);
    }
}