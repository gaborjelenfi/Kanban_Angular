import { Component, OnInit, ViewChild } from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @ViewChild('controlForm', {static: false}) controlForm: NgForm;
  radio: null;

  backLog = [{task:'Task 1', priority:'high'}, {task:'Task 2', priority:'med'}, {task:'Task 3', priority:'low'}];
  inProgress = [{task:'Task 5', priority:'high'}, {task:'Task 6', priority:'high'}];
  codeReview = [{task:'Task 7', priority:'low'}];
  inTest = [{task:'Task 8', priority:'low'}, {task:'Task 9', priority:'med'}, {task:'Task 10', priority:'med'}];
  done = [];

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onSubmit() {

  }

  onReset() {
    this.radio = null;
    this.controlForm.resetForm();
  }
}
