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
  completed:any = ['True', 'False'];
  // completedValue = null;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit() {
    this.getTodosData();
  }
  getTodosData() {
    this._getTodosService.getTodos().subscribe(res => {
      this.todosDetails = new MatTableDataSource(res);
    });
  }

  getTodosDetails(uid: any, status: any) {
    this.todosData = new MatTableDataSource();
    if (
      (status == null || status == "" || status == undefined) &&
      (uid == null || uid == "" || uid == undefined)
      ) {
        this.message = "Please enter userId or select completed value!";
        this.openSnakBar(this.message);
      } else {
        console.log(uid, 'test', status.value);
      if (status.value != null && status.value != "" && status.value != undefined) {
        if (uid != null && uid != "" && uid != undefined) {
          this.todosDetails.filteredData.forEach(element => {
            if (element.userId == uid && element.completed == status.value) {
              this.todosData.filteredData.push(element);
            }
          });
        }else{
          this.todosDetails.filteredData.forEach(element => {
            if (element.completed == status.value) {
              console.log('hello');
              this.todosData.filteredData.push(element);
            }
          });
        }
      } else {
        this.todosDetails.filteredData.forEach(element => {
          if (element.userId == uid) {
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
