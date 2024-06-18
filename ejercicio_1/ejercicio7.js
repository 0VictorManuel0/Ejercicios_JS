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
init(personArr);
function init(personArr) {
    let contenedor = document.querySelector("body");
    console.log(contenedor);
    let tabla = document.createElement("table");
    console.log(personArr.length);
    for (let i = 0; i < personArr.length; i++) {
        let aux=[];
        aux.push(personArr[i]);
        console.log(aux);
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let thText = document.createTextNode(`persona${[i+1]}`);
        
        th.appendChild(thText);
        tr.appendChild(th);

        td = document.createElement("td")
        tdText = document.createTextNode(`${personArr[i].name}`);
        td.appendChild(tdText);
        tr.appendChild(td);

        td = document.createElement("td")
        tdText = document.createTextNode(`${personArr[i].personId}`);
        td.appendChild(tdText);
        tr.appendChild(td);

        td = document.createElement("td")
        tdText = document.createTextNode(`${personArr[i].city}`);
        td.appendChild(tdText);
        tr.appendChild(td);

        td = document.createElement("td")
        tdText = document.createTextNode(`${personArr[i].phoneNo}`);
        td.appendChild(tdText);
        tr.appendChild(td);


        tabla.appendChild(tr);
        contenedor.appendChild(tabla);
    }
}