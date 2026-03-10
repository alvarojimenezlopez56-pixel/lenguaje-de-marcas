// Importo la función 'done' para avisar a Gulp que la tarea terminó
function holaMundo(done) {
    console.log("Hola Mundo");

    // Es vital llamar al callback done() para que Gulp sepa 
    // que la ejecución finalizó correctamente.
    done();
}
exports.default = holaMundo;