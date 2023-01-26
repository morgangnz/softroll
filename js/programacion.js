function generarNotas(){
    var aleatorio;
    for(var i=0;i<6;i++){
        aleatorio=generarNumAleatorio();
        arrayNotas[i]=aleatorio;
    }
    console.log("Hecho.");
}