function ages(a){

    if(a>=0 && a<=2){
        console.log("baby")
    } else if(a>2 && a<=13){
        console.log("child")
    } else if(a>13 && a<=19){
        console.log("teenager")
    } else if(a>19 && a<=65){
        console.log("adult")
    } else if(a>65){
        console.log("elder")
    } else{
        console.log("out of bounds")
    }
}