import { Component } from '@angular/core';
import { DataTableModuleModule } from '../data-table/data-table-module/data-table-module-module';
import { CellEdit } from '../interfaces/cell-edit';
import { ColumnSymbol } from '../interfaces/column-symbol';

@Component({
  selector: 'app-root',
  imports: [ DataTableModuleModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  symbols: ColumnSymbol[] = [{ column: "salary", symbol: "$" }];

  data: any[] = [ { employee_id: 145, name: "Dave", salary: 200000, title: "CEO" }, {employee_id: 146, name: "Amy", salary: 164000, title: "CIO" }, 
                {employee_id: 147, name: "Ted", salary: 60000, title: "QA Engineer" }, {employee_id: 148, name: "Sarah", salary: 95000, title: "Engineer" }, 
                {employee_id: 149, name: "Adam", salary: 164000, title: "CFO" }, {employee_id: 150, name: "Krishna", salary: 105000, title: "Architect" }];

  handleCellEdit(event: CellEdit) {//use this to hook to your back end for edits
    // console.log(event)
  }
}
