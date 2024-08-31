var fs = require('fs');

//  existe
if (fs.existsSync('Tarea')) {
    console.log('La carpeta ya existe');
} else {
    // Crear la carpeta 'Tarea' si no existe
    fs.mkdirSync("Tarea");
    console.log('Carpeta creada');
}

// archivo  existe 
if (fs.existsSync('Texto.txt')) {
    console.log('El archivo ya existe');
} else {
    // Crear el archivo 
    fs.writeFileSync('Texto.txt', 'Holiwi');
    // Mover el archivo
    fs.renameSync('Texto.txt', 'Tarea/Texto.txt');
    console.log('Archivo Movido');
}

// archivo existe o no en la carpeta
if (fs.existsSync('Tarea/Texto.txt')) {
    var archivo = 'Tarea/Texto.txt';
    var lineaNueva = 'adiosito\n';  

    // Agregar una nueva línea al archivo
    fs.appendFileSync(archivo, lineaNueva);  //sin sobrescribir
    console.log('Archivo actualizado');
} else {
    console.log('No hay archivo para editar');
}

//  archivo existe  para eliminarlo
if (fs.existsSync('Tarea/Texto.txt')) {
    // Eliminar el archivo
    fs.unlinkSync('Tarea/Texto.txt');
    console.log('Archivo Eliminado');
} else {
    console.log('No existe el archivo a eliminar');
}