function bus(arr) {
    let cities = 1;
    let cityNum = Number(arr.shift());
    let totalProfit = 0;

    while (cities <= cityNum) {
        if (cities % 5 == 0 && cities % 3 == 0) {
            let city = arr.shift();
            let profit = Number(arr.shift());
            let expense = Number(arr.shift());
            let realProfit = profit - profit * 0.1;
            let dayProfit = realProfit - expense;
            totalProfit+=dayProfit;

            console.log(`In ${city} Burger Bus earned ${(dayProfit).toFixed(2)} leva.`);

        } else if (cities % 3 == 0) {
            let city = arr.shift();
            let profit = Number(arr.shift());
            let expense = Number(arr.shift());
            let realExpense = expense / 2 + expense;
            let dayProfit = profit - realExpense;
            totalProfit += dayProfit

            console.log(`In ${city} Burger Bus earned ${(dayProfit).toFixed(2)} leva.`);

        } else if (cities % 5 == 0) {
            let city = arr.shift();
            let profit = Number(arr.shift());
            let expense = Number(arr.shift());
            let realProfit = profit - profit * 0.1;
            let dayProfit = realProfit - expense;
            totalProfit += dayProfit;

            console.log(`In ${city} Burger Bus earned ${(dayProfit).toFixed(2)} leva.`);


        } else {
            let city = arr.shift();
            let profit = Number(arr.shift());
            let expense = Number(arr.shift());
            let dayProfit = profit - expense;
            totalProfit += dayProfit;

            console.log(`In ${city} Burger Bus earned ${(dayProfit).toFixed(2)} leva.`);
        }

        cities++;
    }

    console.log(`Burger Bus total profit: ${(totalProfit).toFixed(2)} leva.`);
}
bus(["5",

"Lille",

"2226.00",

"1200.60",

"Rennes",

"6320.60",

"5460.20",

"Reims",

"600.20",

"452.32",

"Bordeaux",

"6925.30",

"2650.40",

"Montpellier",

"680.50",

"290.20"])