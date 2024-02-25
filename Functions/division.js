function division(a, b){
    let factorial1 = calcFactorial(a);
    let factorial2 = calcFactorial(b);
    let result = factorial1/factorial2;

    console.log(result.toFixed(2));

    function calcFactorial(num){
        let factorial = 1;

        while (num > 1){
            factorial *= num;
            num--;
        }

        return factorial;
    }
}