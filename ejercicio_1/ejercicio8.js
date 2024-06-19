pais();
function pais() {
    let li = document.querySelectorAll('li');
    li.forEach((element)=>{
        element.addEventListener('click',function(e){
            const target = e.target;
            console.log(target);
            alert(`elemento seleccionado:\n
                id elemento: ${target.id}\n 
                ISO ID: ${target.dataset.id}\n
                Dial Code: ${target.dataset.dialCode}`);
        } );
    });
}