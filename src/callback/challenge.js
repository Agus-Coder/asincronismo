let XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback){
    let xhttp = new XMLHttprequest(); //creado originalmente por Microsfot y luego adoptado como estandar por la industria
    xhttp.open('GET', url_api, true // con esto abrimos la web que queremos obtener)
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText)) //el primer valor pasado es el error, el segundo es el resultado
            } else{
                const error = new Error('error ' + url_api);
                return callback(error, null)
            }
        }
    } //Lo anterior iniciaba la conexion. este punto lo que hace es escuchar la apertura
    xhttp.send()
}