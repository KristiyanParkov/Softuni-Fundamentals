function merge(arr1, arr2){
    let mergedArr = [];

    for(let i = 0; i<arr1.length; i++){
        let el1 = arr1[i]
        let el2 = arr2[i]

        if(i % 2 == 0){
            mergedArr.push(Number(el1) + Number(el2))
        } else{
            mergedArr.push(el1 + el2)
        }
    }

    console.log(mergedArr.join(" - "));
}