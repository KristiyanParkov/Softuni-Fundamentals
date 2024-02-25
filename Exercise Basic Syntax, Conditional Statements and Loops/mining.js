function mining(input){
    let moneySum = 0;
    let dayOfPurchase = 0;
    let count = 0;
    let bitcoinsForToday = 0;

    for(i=0; i<=input.length-1; i++){
        if((i+1)%3==0){
            moneySum+=input[i]*67.51*0.70;
        } else{
            moneySum += input[i]*67.51;
        }
        
        if(moneySum>=11949.16){
            if(dayOfPurchase<1){
                dayOfPurchase = i+1
            }
            bitcoinsForToday = Math.floor(moneySum/11949.16)
            count+=bitcoinsForToday
            moneySum -= 11949.16*bitcoinsForToday
        }
    }

    console.log(`Bought bitcoins: ${count}`);
    if(dayOfPurchase>0){
        console.log(`Day of the first purchased bitcoin: ${dayOfPurchase}`);
    }
    
    console.log(`Left money: ${(moneySum).toFixed(2)} lv.`);
}
