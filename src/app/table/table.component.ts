import { Component, OnInit, ViewChild } from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';

interface Task {
  task: string;
  priority: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @ViewChild('controlForm', { static: false }) controlForm: NgForm;
  textarea: string = null;
  radio: string = null;
  selectedArray: string = null;
  selectedElIndex: number = null;
  isEditMode = false;
  isDragging = false;

// Dummy data for demo purpose
  trash: Task[] = [];
  backLog: Task[] = [];
  inProgress: Task[] = [
    { task: 'Task 5', priority: 'high' },
    { task: 'Task 6', priority: 'high' },
  ];
  codeReview: Task[] = [{ task: 'Task 7', priority: 'low' }];
  inTest: Task[] = [
    { task: 'Task 8', priority: 'low' },
    { task: 'Task 9', priority: 'med' },
    { task: 'Task 10', priority: 'med' },
  ];
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

// Create new task when submit the form
  onSubmit() {
    const task: Task = {
      task: this.controlForm.value.task,
      priority: this.controlForm.value.priority,
    };
    // If is edit mode is true, update the selected element
    if (this.isEditMode) {
      switch (this.selectedArray) {
        case 'backLog':
          this.backLog[this.selectedElIndex] = task;
          break;
        case 'inProgress':
          this.inProgress[this.selectedElIndex] = task;
          break;
        case 'codeReview':
          this.codeReview[this.selectedElIndex] = task;
          break;
        case 'inTest':
          this.inTest[this.selectedElIndex] = task;
          break;
        case 'done':
          this.done[this.selectedElIndex] = task;
          break;
          default:
            this.backLog.unshift(task);
        }
      } else {
        this.backLog.unshift(task);
      }
      this.onReset();
      this.isEditMode = false;
    }

  // Reseting the form
    onReset() {
      this.radio = null;
      this.controlForm.resetForm();
      this.isEditMode = false;
    }

  // Activate the edit mode
    onEdit(nameOfArray: string, item: Task, index: number) {
      this.isEditMode = true;
      this.selectedArray = nameOfArray;
      this.textarea = item.task;
      this.radio = item.priority;
      this.selectedElIndex = index;
  }

  dragging() {
    this.isDragging = true;
  }

  released() {
    this.isDragging = false;
    this.trash = [];
  }
}
