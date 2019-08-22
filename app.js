// Yargs permite ordenar las consultas que llegan por la linea de comandos
//

const { crearArchivo, listarArchivo } = require('./Multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite)
            .then(resp => {
                console.log(resp);
            }).catch(err => {
                console.log(err);
            })

        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite).then(resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err);
        })
        break;
    default:
        console.log(`Comando no reconocido`.red);
        break;
};