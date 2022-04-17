import {RowElement, RowId} from "./interface";
declare function insertRow(row: RowElement): number;
  
declare function deleteRow(rowId: RowId): number;
  
export function updateRow(rowId: RowId, row:RowElement): number;