function esBisiesto(anio){
    if(anio%4==0){
        if(anio%100!=0){
            return console.log("es bisiesto");
        }
        else{
            if(anio%400==0){
                return console.log("es bisiesto");
            }
        }
    }
    return console.log("No es bisiesto");
}