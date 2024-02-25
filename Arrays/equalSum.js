function equal(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    for (let i = 0; i < arr.length; i++) {

        for (let left = i - 1; left >= 0; left--) {
            leftSum += arr[left]


        }
        for (let right = i + 1; right < arr.length; right++) {
            rightSum += arr[right]
        }

        if (leftSum == rightSum) {
            console.log(i);
            isEqual = true;
        }

        leftSum = 0;
        rightSum = 0;
    }
    if (!isEqual){
        console.log("no");
    }
}
