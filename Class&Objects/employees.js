function emp(arr){
    for(let name of arr){
        let emp = { name: name, personalNum: name.length}
        console.log(`Name: ${emp.name} -- Personal Number: ${emp.personalNum}`);
    }
}