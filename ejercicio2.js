function ordenar(Array){
    cantidad = Array.length;
    for(var y=0;y<cantidad;y++){
        for(var y=0;y<cantidad;y++){
            if (Array[y]>Array[y+1]){
                mover = Array[y+1]
                Array[y+1] = Array[y];
                Array[y] = mover; 
            }
        }
    }
}