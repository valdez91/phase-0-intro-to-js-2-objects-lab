// Write your solution in this file!

const employee = {name: 'Sam',
streetAddress: '11 Broadway'
};
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    
    return Object.assign({}, employee, {[key]: value});
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}
const deleteFromEmployeeByKey = (employee, key) => {
    const newObj = Object.assign({}, employee);
    delete newObj[key];
    return newObj;
}
const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}