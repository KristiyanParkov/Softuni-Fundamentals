function word(arr){
    let searchedWords = arr.shift().split(` `);
    let occurances = {};

    for (let word of searchedWords){
        occurances[word] = 0;
    }

    for(let word of arr){
        if (word in occurances) {
            occurances[word]++;
        }
    }

    let entries = Object.entries(occurances).sort((a, b) => b[1] - a[1])

    for (let [word, repeats] of entries){
        console.log(`${word} - ${repeats}`);
    }
}