function char(a, b){
    let code1 = a.charCodeAt(0)
    let code2 = b.charCodeAt(0)
    let result = "";

    let min = Math.min(code1, code2);
    let max = Math.max(code1, code2);

    for(let curCode = min + 1; curCode < max; curCode++){
        let curChar = String.fromCharCode(curCode);
        result+= curChar + " ";
    }

    console.log(result);
}