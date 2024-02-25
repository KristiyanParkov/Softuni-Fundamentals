function arrayRotation(arr, rotations){

    for(i=1; i <= rotations; i++){
        let el = arr.shift();
        arr.push(el);
    }

    console.log(arr.join(` `));
}