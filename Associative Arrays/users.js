function users(arr){
    let companyEmployees = {};

    for (let companyEmployee of arr){
        let [company, employeeId] = companyEmployee.split(` -> `);

        if (company in companyEmployees) {
            if(!companyEmployees[company].includes(employeeId))
            companyEmployees[company].push(employeeId);
        } else {
            companyEmployees[company] = [employeeId];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, employeeIds] of entries){
        console.log(name);
        employeeIds.forEach(id => console.log(`-- ${id}`))
    }
}