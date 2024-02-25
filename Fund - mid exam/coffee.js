function coffee(arr) {
    let coffeeList = arr[0].split(` `);
    let actions = Number(arr[1]);
    let i = 2;

    while (actions > 0) {
        let commands = arr[i].split(` `);

        if (commands[0] == "Include") {
            coffeeList.push(commands[1])

        } else if (commands[0] == "Remove") {
            let n = commands[2]
            if (n > coffeeList.length) {
                i++;
                actions--;
                continue;
            } else if (commands[1] == "first") {
                for (j = 1; j <= n; j++) {
                    coffeeList.shift()
                }


            } else if (commands[1] == "last") {

                for (k = 1; k <= n; k++) {
                    coffeeList.pop()
                }

            }

        } else if (commands[0] == "Prefer") {

            if (commands[1] >= 0 && commands[1] < coffeeList.length && commands[2] >= 0 && commands[2] < coffeeList.length) {
                let n1 = Number(commands[1]);
                let n2 = Number(commands[2]);

                let coffee1 = coffeeList[n1];
                let coffee2 = coffeeList[n2];

                coffeeList[n1] = coffee2;
                coffeeList[n2] = coffee1;
            } else {
                i++;
                actions--;
                continue;
            }

        } else if(commands[0] == "Reverse"){
            coffeeList.reverse();
        }

        actions--;
        i++;
    }
    console.log("Coffees:");
    console.log(coffeeList.join(" "));


}
