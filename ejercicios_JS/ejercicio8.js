
// manda a llamar la funcion
pais();

// declara la funcion
function pais() {
    let li = document.querySelectorAll('li');// se obtiene las tag <li> que llevaran la funcion (3)
    li.forEach((element)=>{ // se recorre la varibale con las tag que guardo
        element.addEventListener('click',function(e){ //por cada elemento que se encuentra, se le asigna un evento
            const target = e.target; // se guarda el evento.target ya que se le asigna al elemento en especifico
            console.log(target);    // se imprime en log el target a cual le hacemos clic
            alert(`elemento seleccionado:\n   
                id elemento: ${target.id}\n 
                ISO ID: ${target.dataset.id}\n
                Dial Code: ${target.dataset.dialCode}`); // se crea el alert con los atributos que tiene la tag
        } );
    });
}