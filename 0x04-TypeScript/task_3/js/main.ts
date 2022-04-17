/// <reference path="crud.d.ts"/>
import * as db from "./crud";
import {RowId, RowElement} from "./interface";

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowId = db.insertRow(row);

const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

db.updateRow(row, newRowID);
db.deleteRow(newRowID);