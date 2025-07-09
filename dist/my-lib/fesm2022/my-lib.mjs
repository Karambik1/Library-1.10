import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

class MyLib {
    employees = [
        { id: 1, name: 'Алексей Козлов', position: 'Frontend-разработчик', department: 'IT', salary: 150000 },
        { id: 2, name: 'Мария Воробьёва', position: 'UX/UI дизайнер', department: 'Маркетинг', salary: 120000 },
        { id: 3, name: 'Артём Лебедев', position: 'Продукт-менеджер', department: 'Продажи', salary: 180000 },
        { id: 4, name: 'Ольга Соколова', position: 'Data Scientist', department: 'Финансы', salary: 200000 },
        { id: 5, name: 'Павел Новиков', position: 'DevOps-инженер', department: 'IT', salary: 170000 }
    ];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.6", ngImport: i0, type: MyLib, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.6", type: MyLib, isStandalone: true, selector: "lib-my-lib", ngImport: i0, template: `
<h2>Средняя зарплата 5 работников</h2>
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Имя</th>
      <th>Должность</th>
      <th>Отдел</th>
      <th>Зарплата</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let employee of employees">
      <td>{{ employee.id }}</td>
      <td>{{ employee.name }}</td>
      <td>{{ employee.position }}</td>
      <td>{{ employee.department }}</td>
      <td>{{ employee.salary }}</td>
    </tr>
  </tbody>
</table>
  `, isInline: true, styles: [""], dependencies: [{ kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.6", ngImport: i0, type: MyLib, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-lib', imports: [NgFor], template: `
<h2>Средняя зарплата 5 работников</h2>
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Имя</th>
      <th>Должность</th>
      <th>Отдел</th>
      <th>Зарплата</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let employee of employees">
      <td>{{ employee.id }}</td>
      <td>{{ employee.name }}</td>
      <td>{{ employee.position }}</td>
      <td>{{ employee.department }}</td>
      <td>{{ employee.salary }}</td>
    </tr>
  </tbody>
</table>
  ` }]
        }] });

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLib };
//# sourceMappingURL=my-lib.mjs.map
