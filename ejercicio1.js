function espalindromo(palabra){
    cantidad = palabra.length;
    cont=0;
    espalindromo = false;
    for(var x=0;x<Math.round(cantidad/2);x++){
        if(palabra[x]==palabra[cantidad-x-1]){
            cont++;
        }
    }
    if(cont==Math.round(cantidad/2)){
        espalindromo = true;
    }
    console.log(espalindromo);
}