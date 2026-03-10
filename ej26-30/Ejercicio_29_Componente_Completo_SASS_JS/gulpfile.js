// 1. Importación de módulos
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// 2. Función para compilar el SASS
function compilarCSS() {
    // Busca el archivo style.scss que creamos antes
    return src('style.scss')
        .pipe(sass().on('error', sass.logError)) // Compila y avisa si hay errores
        .pipe(dest('./')) // Guarda el style.css en la misma carpeta para el index.html
}

// 3. Función Watch (Vigilante)
function observarCambios() {
    // Si se guarda cualquier cambio en style.scss, se ejecuta compilarCSS automáticamente
    watch('style.scss', compilarCSS);
}

// 4. Exportación de tareas
// Esto permite que al escribir 'npx gulp' se haga la primera compilación y se active el watch
exports.default = series(compilarCSS, observarCambios);