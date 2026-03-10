// Tarea: Configura tu gulpfile.js
// 1. Importa las herramientas necesarias de gulp y gulp-sass
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// 2. Crea la función compilarCSS()
function compilarCSS(done) {
    return src('src/scss/style.scss') // Origen del archivo
        .pipe(sass().on('error', sass.logError)) // Compila y muestra errores si los hay
        .pipe(dest('dist/css')); // Destino del archivo compilado
}

// 4. PLUS: Función para observar cambios (watch)
function observarCambios() {
    // Escucha cualquier archivo .scss en la carpeta src y subcarpetas
    watch('src/**/*.scss', compilarCSS);
}

// 3. Exporta las tareas
// Uso series para que primero compile una vez y luego se quede escuchando
exports.css = compilarCSS;
exports.default = series(compilarCSS, observarCambios);
