import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'lib-my-lib',
  imports: [NgFor],
  template: `
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
  `,
  styles: ``
})
export class MyLib {
employees = [
            { id: 1, name: 'Алексей Козлов', position: 'Frontend-разработчик', department: 'IT', salary: 150000 },
            { id: 2, name: 'Мария Воробьёва', position: 'UX/UI дизайнер', department: 'Маркетинг', salary: 120000 },
            { id: 3, name: 'Артём Лебедев', position: 'Продукт-менеджер', department: 'Продажи', salary: 180000 },
            { id: 4, name: 'Ольга Соколова', position: 'Data Scientist', department: 'Финансы', salary: 200000 },
            { id: 5, name: 'Павел Новиков', position: 'DevOps-инженер', department: 'IT', salary: 170000 }
];
}