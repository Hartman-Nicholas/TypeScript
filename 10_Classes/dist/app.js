"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
class Department {
    constructor($name) {
        this.employees = [];
        this.name = $name;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        for (let employee of this.employees) {
            console.log(employee);
        }
    }
    get $name() {
        return this.name;
    }
    set $name(value) {
        this.name = value;
    }
}
exports.Department = Department;
const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
accounting.addEmployee("Mary");
accounting.addEmployee("Robert");
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map