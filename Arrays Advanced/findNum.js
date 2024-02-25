function findNum(arr, criteria){
    let count = 0;
    let el = criteria[2]

    let arr1 = arr.slice(0, criteria[0])
    arr1 = arr1.slice(criteria[1], arr1.length)
    

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] == el){
            count++
        }
    }

    console.log(`Number ${el} occurs ${count} times.`);
}

