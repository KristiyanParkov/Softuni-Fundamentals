function bomb(nums, bombInfo){
    let [bombNum, power] = bombInfo;

    while(nums.includes(bombNum)){
        let idx = nums.indexOf(bombNum);
        nums.splice(Math.max(0, idx - power), 2*power+1, 0)
    }

    let sum = 0;

    for(let num of nums){
        sum += num;
    }

    console.log(sum);
}