//requireds
//El required que esta acontinuacion es un paquete que lo trae 
//incorporado node y que se puede encontrar en nodejs.org (ES NATIVO) 
const fs = require('fs');
const colors = require('colors');
//const fs = require('Express'); es un paquete externo a node que se descarga y no es nativo
//const fs = require('./fs'); el que traiga ./ significa que es un archivo que esta 
//dentro de alguna carpeta y suele ser creado por nosotros   

let data = '';

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero`.red);
            return;
        }
        if (!Number(limite)) {
            reject(`${limite} no es un numero`.red);
            return;
        }

        for (let i = 0; i <= limite; i++) {


            data += `${base} * ${i} = ${i*base} \n`;

        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`.green);
        });

    });

}

let listarArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base: <<${base}>> no es un número`.red);
        } else if (!Number(limite)) {
            reject(`El limite: <<${limite}>> no es un número`.red);
        } else {
            for (let i = 0; i <= limite; i++) {
                data += `${base} * ${i} = ${base*i} \n`;
            }
            resolve(data.yellow);
        }

    });
}


module.exports = {
    crearArchivo,
    listarArchivo
}