const body = document.body;

const infoDiv = document.createElement('div');
infoDiv.style.position = 'fixed';
infoDiv.style.top = '10px';
infoDiv.style.left = '10px';
infoDiv.style.background = '#fff';
infoDiv.style.padding = '5px';
infoDiv.style.border = '1px solid #ccc';
body.appendChild(infoDiv);

function actualizarInfo(eventType, info) {
    infoDiv.textContent = `${eventType}: ${info}`;
}

function actualizarCoordenadas(event) {
    const posXNavegador = event.clientX;
    const posYNavegador = event.clientY;
    const posXPagina = event.pageX;
    const posYPagina = event.pageY;
    
    actualizarInfo('mousemove', `Posición respecto al navegador: (${posXNavegador}, ${posYNavegador}) | Posición respecto a la página: (${posXPagina}, ${posYPagina})`);
}

function actualizarTecla(event) {
    const tecla = event.key;
    const codigoTecla = event.keyCode;
    const estadoTecla = event.type;

    actualizarInfo('keypress', `Tecla presionada: ${tecla} (Código: ${codigoTecla}) - Tipo de evento: ${estadoTecla}`);
}

body.addEventListener('mousemove', actualizarCoordenadas);
body.addEventListener('keypress', actualizarTecla);
