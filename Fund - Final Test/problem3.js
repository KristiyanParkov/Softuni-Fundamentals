function organizeFeeding(commands) {
    let animals = {};
    let areas = {};

    for (let command of commands) {
        if (command === "EndDay") {
            break;
        }

        let [action, details] = command.split(': ');

        if (action === "Add") {
            let [animal, food, area] = details.split('-').map(x => x.trim());

            if (!animals[animal]) {
                animals[animal] = { food: 0, area };
                if (!areas[area]) {
                    areas[area] = 0;
                }
                areas[area]++;
            }

            animals[animal].food += Number(food);
        } else if (action === "Feed") {
            let [animal, food] = details.split('-').map(x => x.trim());

            if (animals[animal]) {
                animals[animal].food -= Number(food);

                if (animals[animal].food <= 0) {
                    console.log(`${animal} was successfully fed`);
                    areas[animals[animal].area]--;
                    delete animals[animal];
                }
            }
        }
    }

    console.log("Animals:");
    Object.entries(animals).forEach(([animal, { food }]) => {
        console.log(` ${animal} -> ${food}g`);
    });

    console.log("Areas with hungry animals:");
    Object.entries(areas).forEach(([area, hungryAnimals]) => {
        if (hungryAnimals > 0) {
            console.log(` ${area}: ${hungryAnimals}`);
        }
    });
}

// Example usage:
const commands = [
    "Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1320-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"
];

organizeFeeding(commands);
