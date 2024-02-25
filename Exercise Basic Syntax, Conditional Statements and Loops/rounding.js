function rounding(a,b){

    if(b >15){
        b=15;
    }

    num = a.toFixed(b)
    console.log(parseFloat(num))
}
