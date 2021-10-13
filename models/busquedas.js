const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa','Madrir','San Jose'];

    constructor() {
        //TODO: leer DB si existe
    }

    get paramsMapbox(){
        return {
            'access_token' : '',
            'limit' : 5,
            'language' : 'es'
        }
    }


    async ciudad(lugar = ''){
        try {
            //peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}$.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            
            //const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/domingo%20santa%20cruz%2C%20la%20pintana.json?access_token=pk.eyJ1IjoibWVnYWtpZCIsImEiOiJja29qZjhvNHkxYzBhMm9wMXc2YjBrdDZvIn0.r1139w_2aXafrlZhhbyZlA&limit=5&language=es');
            console.log(resp.data);

            return []; // retornar los lugares
        }catch (error){
            return [];
        }
    }

}

module.exports = Busquedas;