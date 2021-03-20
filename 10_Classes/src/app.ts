export class Department {
  private name: string;
  private employees: string[] = [];

  constructor($name: string) {
    this.name = $name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  public addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  public printEmployeeInformation(this: Department) {
    for (let employee of this.employees) {
      console.log(employee);
    }
  }

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }
}

const accounting = new Department("Accounting");

console.log(accounting);
accounting.describe();

accounting.addEmployee("Mary");
accounting.addEmployee("Robert");

accounting.printEmployeeInformation();
