function entero_binario(entero){
    if(entero<2){
        return entero;
    }
    else{
        numero1 = (entero%2).toString()
        while(entero>1){
            if(entero%2==1){
                entero = Math.round(entero/2)-1;
            }
            else{
                entero = entero/2;
            }
            numero1 = (entero%2).toString().concat(numero1);
        }
        return numero1;
    }
}