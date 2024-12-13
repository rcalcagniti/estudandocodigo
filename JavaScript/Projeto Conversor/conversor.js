function aparecerElemento () {
    let selectConversorJS = document.getElementById("selectConversor").value;
    console.log(selectConversorJS);
    
    if (selectConversorJS == "temperatura") {
        document.getElementById("containerTemperatura").style.display = 'block';
        document.getElementById("containerPeso").style.display = 'none';

    } else if (selectConversorJS == "peso") {
        document.getElementById("containerPeso").style.display = 'block';
        document.getElementById("containerTemperatura").style.display = 'none';
    }
};

function converterTemperatura () {
    let inputTemperaturaJS = Number (document.getElementById("inputTemperaturaHTML").value);
    let resultadoJS = 0;
    
    let deTemperaturaJS = document.getElementById("deTemperatura").value;
    let paraTemperaturaJS = document.getElementById("paraTemperatura").value;
    
    console.log (inputTemperaturaJS);
    console.log (deTemperaturaJS);
    console.log (paraTemperaturaJS);
    
    if (deTemperaturaJS == "celsius") {
        resultadoJS = (inputTemperaturaJS*9/5)+32;
        document.getElementById("resultadoTemperatura").innerHTML = resultadoJS + " " +paraTemperaturaJS;
    } else if (deTemperaturaJS == "fahrenheit") {
        resultadoJS = (inputTemperaturaJS-32)/9*5;
        document.getElementById("resultadoTemperatura").innerHTML = resultadoJS + " " +paraTemperaturaJS;
    }
};

function converterPeso () {
    let inputPesoJS = Number (document.getElementById("inputPesoHTML").value);
    let resultadoPesoJS = 0;
    
    let dePesoJS = document.getElementById("dePeso").value;
    let paraPesoJS = document.getElementById("paraPeso").value;
    
    console.log (inputPesoJS);
    console.log (dePesoJS);
    console.log (paraPesoJS);
    
    if (dePesoJS == "gramas") {
        resultadoPesoJS = (inputPesoJS/1000);
        document.getElementById("resultadoPeso").innerHTML = resultadoPesoJS + " " +paraPesoJS;
    } else if (dePesoJS == "kg") {
        resultadoPesoJS = (inputPesoJS*1000);
        document.getElementById("resultadoPeso").innerHTML = resultadoPesoJS + " " +paraPesoJS;
    }
    
    console.log (resultadoPesoJS);
};
