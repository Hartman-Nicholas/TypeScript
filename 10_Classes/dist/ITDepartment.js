"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
class ITDepartment extends app_js_1.Department {
    constructor($id, $salary, $name) {
        super($name);
        this.id = $id;
        this.salary = $salary;
    }
    get $id() {
        return this.id;
    }
    get $salary() {
        return this.salary;
    }
}
const it = new ITDepartment("01", 10000, "Mary");
it.printEmployeeInformation();
console.log(it.$name);
//# sourceMappingURL=ITDepartment.js.map