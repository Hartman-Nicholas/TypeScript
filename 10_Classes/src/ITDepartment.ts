import { Department } from "./app.js";

class ITDepartment extends Department {
  private id: string;
  private salary: number;

  constructor($id: string, $salary: number, $name: string) {
    super($name);
    this.id = $id;
    this.salary = $salary;
  }

  /**
   * Getter $id
   * @return {string}
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Getter $salary
   * @return {number}
   */
  public get $salary(): number {
    return this.salary;
  }
}

const it = new ITDepartment("01", 10000, "Mary");
it.printEmployeeInformation();
console.log(it.$name);
