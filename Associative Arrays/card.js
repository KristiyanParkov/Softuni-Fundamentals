function card(arr){
    let playersCards = {};
    let powerValues = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14}
    let types = {S: 4, H: 3, D: 2, C: 1};

    for (let playerDeck of arr){
        let [playerName, cardsStr] = playerDeck.split(`: `);
        let cards = cardsStr.split(`, `);

        if (playerName in playersCards) {
            playersCards[playerName].push(...cards)
        } else {
            playersCards[playerName] = cards;
        }
    }

    let enrties = Object.entries(playersCards);

    for (let [name, deck] of enrties){
        let uniqueDeck = new Set(deck);
        let deckValue = 0;

        for (let card of uniqueDeck){
            let power = card.slice(0, card.length - 1);
            let type = card[card.length - 1];

            let cardValue = powerValues[power] * types[type];
            deckValue +=cardValue;
        }
        console.log(`${name}: ${deckValue}`);
    }

    
}