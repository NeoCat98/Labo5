function fibo(n){
    ArrayFibo=[0];
    if(n>2){
        ArrayFibo.push(1);
    }
    for(var x=2;x<n;x++){
        FiboSuma=ArrayFibo[x-2]+ArrayFibo[x-1];
        ArrayFibo.push(FiboSuma);
    }
    console.log(ArrayFibo);
}