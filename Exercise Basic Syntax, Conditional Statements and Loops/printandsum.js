function printandsum(start, end){
    let sum = 0;
    let nums =``;

    for(let num = start; num<= end; num++){
        nums += num + ` `;
        sum += num;
        console.log();
    }
    console.log(nums);
    console.log(`Sum: ${sum}`);
}