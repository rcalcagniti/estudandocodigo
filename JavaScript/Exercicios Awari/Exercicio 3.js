var primeiroNumero = 0;
var segundoNumero = 0;
var terceiroNumero = 0;
var mediaNumeros = 0;
var resultado = 0;
function media () {
   primeiroNumero = parseFloat(document.getElementById("numero1").value);
   segundoNumero = parseFloat(document.getElementById("numero2").value);
   terceiroNumero = parseFloat(document.getElementById("numero3").value);
   mediaNumeros = ((primeiroNumero + segundoNumero + terceiroNumero)/3);
   resultado = ("A media dos números é " + mediaNumeros);
   document.querySelector(".resultado").innerHTML = resultado
   console.log(mediaNumeros);
};
