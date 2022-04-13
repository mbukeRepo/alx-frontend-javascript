interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
};

const john: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 23,
  location: 'California',
};

const jane: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 34,
  location: 'Washington',
};

const students: Student[] = [john, jane];

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

const rowHead: HTMLTableRowElement = thead.insertRow(0);
const fName: HTMLTableCellElement = rowHead.insertCell(0);
const loc: HTMLTableCellElement = rowHead.insertCell(1);

loc.innerHTML = 'location';
fName.innerHTML = 'firstName';
table.append(thead);

students.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);

