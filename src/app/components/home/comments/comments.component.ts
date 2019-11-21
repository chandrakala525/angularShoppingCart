import { Component, OnInit } from "@angular/core";
import { GetCommentsService } from "src/app/services/get-comments.service";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent implements OnInit {
  constructor(private _getCommentsService: GetCommentsService) {}

  commentsDetails: any = [];
  postId: number;
  commentsData: any = [];
  ngOnInit() {
    this.getCommentsData();
  }

  getCommentsData(){
    this._getCommentsService.getComments().subscribe(res => {
      this.commentsDetails = JSON.parse(JSON.stringify(res));
      this.commentsData = this.commentsDetails;
    });
  }

  getCommentsDetails() {
    this.commentsData = [];
    if (this.postId == null || this.postId == undefined) {
      this.commentsData = this.commentsDetails;
    } else {
      this.commentsDetails.forEach(element => {
        if (element.postId == this.postId) {
          this.commentsData.push(element);
        }
      });
    }
  }
}
