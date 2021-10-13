const Busquedas = require("./models/busquedas");
const {leerInput,inquirerMenu,pausa} = require('./helpers/inquirer');

const main = async () => {

    const busquedas = new Busquedas;
    let opt;

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                //mostrar mensaje
                const lugar = await leerInput('Ciudad: '.green);
                busquedas.ciudad(lugar);

                //Buscar los luagres

                //seleccionar el lugar

                //clima

                //mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:');
                console.log('Latitud:');
                console.log('Langitud:');
                console.log('Temperatura:');
                console.log('Mínima:');
                console.log('Máxima:');
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