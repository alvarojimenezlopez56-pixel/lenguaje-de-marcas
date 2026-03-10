// Ejercicio 28: ES6+

const container = document.getElementById('resultado');

// 1. Convierte esta función a Arrow Function
// function saludar(nombre) {
//    return 'Hola ' + nombre;
// }
const saludar = (nombre) => "Hola " + nombre;


// 2. Dado el siguiente array de objetos:
const usuarios = [
    { id: 1, nombre: 'Ana', rol: 'Admin' },
    { id: 2, nombre: 'Carlos', rol: 'User' },
    { id: 3, nombre: 'Bea', rol: 'Editor' }
];

// 3. Usa .filter() (con arrow function) para encontrar a los de rol 'Admin'
const admins = usuarios.filter(usuario => usuario.rol === 'Admin');
console.log(admins);


// 4. Renderiza la lista en el DOM usando Template Literals (``) y .map()
// Uso .map() para generar un array de strings HTML
const listaHTML = admins.map(u => `<li>${u.nombre} (ID: ${u.id})</li>`);

// Inyecto ese array en el div #resultado usando .join('') y innerHTML
const divResultado = document.querySelector('#resultado');

// Convierto el array en un string y lo envuelvo en una <ul>
divResultado.innerHTML = `
    <h3>Lista de Administradores:</h3>
    <ul>
        ${listaHTML.join('')}
    </ul>
`;