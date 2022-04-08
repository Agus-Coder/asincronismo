let XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';


function fetchData (url_api, callback) {
    let xhttp = new XMLHttprequest(); //creado originalmente por Microsfot y luego adoptado como estandar por la industria
    xhttp.open('GET', url_api, true) // con esto abrimos la web que queremos obtener)
    xhttp.onreadystatechange = function (event) {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    callback(null, JSON.parse(xhttp.responseText)) //el primer valor pasado es el error, el segundo es el resultado
                } else {
                    const error = new Error('error ' + url_api);
                    return callback(error, null)
                }
            }
        } //Lo anterior iniciaba la conexion. este punto lo que hace es escuchar la apertura
    xhttp.send()
}

fetchData(API, function(error1, data1) {
    if(error1) return console.log(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if (error2) return console.log(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if (error3) return console.log(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})