import { Component, OnInit, ViewChild } from "@angular/core";
import { GetTodosService } from "src/app/services/get-todos.service";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  constructor(
    private _getTodosService: GetTodosService,
    private _snackBar: MatSnackBar
  ) {}

  tableColumns: string[] = ["id", "userId", "title", "completed"];
  todosData: any = [];
  todosDetails: any;
  actualPaginator: MatPaginator;
  message: string;
  completed: any = ["", "true", "false"];
  completedValue = null;
  userId = "";

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit() {
    this.getTodosData();
  }
  getTodosData() {
    this._getTodosService.getTodos().subscribe(res => {
      this.todosDetails = new MatTableDataSource(res);
    });
  }

  getTodosDetails() {
    this.todosData = new MatTableDataSource();
    if(this.completedValue == ""){
      this.completedValue = null;
    }
    if (
      (this.completedValue == null ||
        this.completedValue == "" ||
        this.completedValue == undefined) &&
      (this.userId == null || this.userId == "" || this.userId == undefined)
    ) {
      this.message = "Please enter userId or select completed value!";
      this.openSnakBar(this.message);
    } else {
      if (
        this.completedValue != null &&
        this.completedValue != "" &&
        this.completedValue != undefined
      ) {
        if (
          this.userId != null &&
          this.userId != "" &&
          this.userId != undefined
        ) {
          this.todosDetails.filteredData.forEach(element => {
            if (
              element.userId == this.userId &&
              '"' + element.completed + '"' == '"' + this.completedValue + '"'
            ) {
              this.todosData.filteredData.push(element);
            }
          });
        } else {
          this.todosDetails.filteredData.forEach(element => {
            if (
              '"' + element.completed + '"' ==
              '"' + this.completedValue + '"'
            ) {
              this.todosData.filteredData.push(element);
            }
          });
        }
      } else {
        this.todosDetails.filteredData.forEach(element => {
          if (element.userId == this.userId) {
            this.todosData.filteredData.push(element);
          }
        });
      }
    }
    this.todosData.paginator = this.paginator;
  }

  openSnakBar(message: string) {
    this._snackBar.open(message, "X", {
      // duration: 2000,
      verticalPosition: "top",
      panelClass: ["red-snackbar"]
    });
  }
}
