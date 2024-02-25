function hogwarts(arr) {
    let text = arr.shift();

    while (arr.length > 0) {
        let tokens = arr.shift().split(" ");
        let command = tokens.shift();

        if (command == "Abracadabra") {
            break;
        }

        if (command == "Abjuration") {
            text = text.toUpperCase();
            console.log(text);
        } else if (command == "Necromancy") {
            text = text.toLowerCase();
            console.log(text);
        } else if (command == "Illusion") {
            let idx = Number(tokens[0]);
            let char = tokens[1];

            if (idx < 0 || idx >= text.length) {
                console.log("The spell was too weak.");
            } else {
                let text1 = text.slice(0, idx);
                let text2 = text.slice(idx + 1);
                text = text1 + char + text2;
                console.log("Done!");
            }
        } else if (command == "Divination") {
            let [substring, replacement] = tokens;

            if (text.includes(substring)) {
                text = text.split(substring).join(replacement);
                text = text.replace(/,/g, '');
                console.log(text);
            } else {
                console.log("The spell did not work!");
            }
        } else if (command == "Alteration") {
            let substring = tokens[0];

            if (text.includes(substring)) {
                text = text.split(substring).join("");
                console.log(text);
            } else {
                console.log("The spell did not work!");
            }
        } else {
            console.log("The spell did not work!");
        }
    }
}

hogwarts([
    "SwordMaster",
    "Divination ",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"
]);




// hogwards((["A7ci0",
//     "Illusion 1 c",
//     "Illusion 4 o",
//     "Abjuration",
//     "Abracadabra"]))

// hogwards((["TR1GG3R",
// "Necromancy",
// "Illusion 8 m",
// "Illusion 9 n",
// "Abracadabra"]))

// hogwards((["SwordMaster",
// "Divination ",
// "Abjuration",
// "Necromancy",
// "Alteration master",
// "Abracadabra"]))