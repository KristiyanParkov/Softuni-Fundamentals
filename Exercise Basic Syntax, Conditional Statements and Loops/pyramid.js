function pyramid(base, increment){
    let stoneSum = 0
    let marbleSum = 0;
    let lapisSum = 0;
    let goldSum = 0;
    let height = 0;
    let size = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;

    for(let i = 1; base >=1 ; i++){
        if(i%5==0){
            size = base*base;
            stone = (base-2)*(base-2);
            lapis = size - stone;
            lapisSum += lapis;
            stoneSum += stone;        
        } else if(base==2 || base==1){
            gold = base*base;
            goldSum += gold;
        } else{
            size = base*base;
            stone = (base-2)*(base-2);
            marble = size - stone;
            stoneSum += stone;
            marbleSum += marble; 
        }
          height++;
          base -= 2;
    }

    console.log(`Stone required: ` + Math.ceil(stoneSum*increment));
    console.log(`Marble required: ` + Math.ceil(marbleSum*increment));
    console.log(`Lapis Lazuli required: ` + Math.ceil(lapisSum*increment));
    console.log(`Gold required: ` + Math.ceil(goldSum*increment));
    console.log(`Final pyramid height: ` + Math.floor(height*increment));
}
