function cutReverse(str){
    let middleIdx = str.length / 2;

    let firstHalf = str.slice(0, middleIdx).split(``).reverse().join(``);
    let secondHalf = str.slice(middleIdx).split(``).reverse().join(``);

    console.log(firstHalf);
    console.log(secondHalf);
}