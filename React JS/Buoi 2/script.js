

// Bai 1
let totalSalary = 0;
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

if (Object.keys(salaries).length == 0) {
    console.log("totalSalary: ", 0);
} else {
    for (let key in salaries) {
        totalSalary += salaries[key];
    }
    console.log("totalSalary: ", totalSalary);
}


// Bai 2
let menu1 = {
    width: 200,
    height: 300,
    title: 'My menu',
};
console.log("Before: ", menu1);

function multiplyNumeric(menu) {
    for (const key in menu) {
        if (typeof menu[key] == "number") {
            menu[key] *= 2;
        }
    }
    console.log("After: ", menu)
}
multiplyNumeric(menu1);




