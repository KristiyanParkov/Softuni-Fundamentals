function chars(str){
    let noRepeatStr = ``;
    let prevChar = ``;

    for(let char of str){
        if(char !== prevChar) {
            noRepeatStr+=char;
            prevChar = char;
        }
    }
    console.log(noRepeatStr);
}