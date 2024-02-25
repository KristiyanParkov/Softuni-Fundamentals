function distArr(arr){
    let uniqueNums = [];

    for (let num of arr){
        if (!uniqueNums.includes(num)){
            uniqueNums.push(num);
        }
    }

    console.log(uniqueNums.join(` `));
}