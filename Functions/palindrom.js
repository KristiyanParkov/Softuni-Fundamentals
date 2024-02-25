function palindrome(arr){

    for(let num of arr){
        let reversedStr = num.toString().split('').reverse().join("");
        console.log(num == reversedStr);
    }
    
}
palindrome([121, 133, 232])