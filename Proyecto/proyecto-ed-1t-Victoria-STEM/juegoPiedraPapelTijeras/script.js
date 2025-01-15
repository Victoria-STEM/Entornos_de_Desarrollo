
// Creacion de los contadores que empiezan en 0:
let contadorJugador = 0;
let contadorMaquina = 0;

// Comienza el Juego:
function juego(opcionUsuario) {

    // Declaración de variables:
    let resultado = '';
    const opciones = ['piedra', 'papel', 'tijera'];
    const opcionMaquina = opciones[Math.floor(Math.random() * opciones.length)]; // Elecion aleatoria de la maquina

    // Muestra de las opciones del usuario y la máquina por pantalla:
    document.getElementById('user-choice').textContent = `Tu elección: ${opcionUsuario}`;
    document.getElementById('computer-choice').textContent = `Elección de la máquina: ${opcionMaquina}`;

    // Comparación de las elecciones. Selección del ganador y actualización del marcador:
    if (opcionUsuario === opcionMaquina) {
        resultado = 'Es un empate 🤝';
    } else if ((opcionUsuario === 'piedra' && opcionMaquina === 'tijera') || (opcionUsuario === 'papel' && opcionMaquina === 'piedra') || (opcionUsuario === 'tijera' && opcionMaquina === 'papel')) {
        resultado = '¡Tu ganas! 🎉'; contadorJugador++;
    } else {
        resultado = 'Gana la máquina 😢'; contadorMaquina++;
    }

    // Mostrar resultado:
    document.getElementById('winner').textContent = `${resultado}`;

    // Mostrar marcador:
    document.getElementById('user-wins').textContent = `Jugador: ${contadorJugador}`;
    document.getElementById('computer-wins').textContent = `Máquina: ${contadorMaquina}`;
}
