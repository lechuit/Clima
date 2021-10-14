require('dotenv').config();

const Busquedas = require("./models/busquedas");
const {leerInput,inquirerMenu,pausa, listarLugares} = require('./helpers/inquirer');

const main = async () => {

    const busquedas = new Busquedas;
    let opt;

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                //mostrar mensaje
                const lugar = await leerInput('Ciudad: '.green);

                //Buscar los lugares
                const lugares = await busquedas.ciudad(lugar);

                //seleccionar el lugar
                const id = await listarLugares(lugares);
                const lugarSeleccionado = lugares.find( l => l.id === id);

                //clima
                const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);

                //mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSeleccionado.nombre.green);
                console.log('Latitud: ', lugarSeleccionado.lat);
                console.log('Langitud: ', lugarSeleccionado.lng);
                console.log('Temperatura: ', clima.temp);
                console.log('Mínima: ', clima.min);
                console.log('Máxima: ', clima.max);
                console.log('Como esta el clima: ', clima.desc.green);
                break;

            case 2:
                console.log(opt);
                break;
        }
        if (opt !== 0) {
            await pausa();
        }
    } while (opt !== 0);
}

main();