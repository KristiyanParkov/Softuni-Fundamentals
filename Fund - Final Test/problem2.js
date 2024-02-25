function regex(arr) {
    let n = Number(arr.shift());

    while (n > 0) {
        let str = arr.shift();
        let pattern = /^([$%])(?<name>[A-Z][a-z]{2,})\1:\s\[(?<num1>\d+)]\|\[(?<num2>\d+)]\|\[(?<num3>\d+)]\|$/g;
        let match = pattern.exec(str);

        if (match) {
            let { name, num1, num2, num3 } = match.groups;
            num1 = Number(num1);
            num2 = Number(num2);
            num3 = Number(num3);

            let char1 = String.fromCharCode(num1);
            let char2 = String.fromCharCode(num2);
            let char3 = String.fromCharCode(num3);

            console.log(`${name}: ${char1}${char2}${char3}`);
        } else {
            console.log("Valid message not found!");
        }

        n--;
    }
}

regex(["3", "$Request$: [73]|[115]|[32]|", "$Taggy%: [73]|[73]|[73]|", "%Taggy%: [118]|[97]|[108]|"]);