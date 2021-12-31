import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  displayTask: Array<any> = [];

  taskSubscription = new Subject();

  constructor() {
    this.displayTask = JSON.parse(localStorage.getItem('tasklist'));
  }

  onAddTask(task) {
    if (!this.displayTask) {
      this.displayTask = [];
    }
    this.displayTask.push(task)
    localStorage.setItem("tasklist", JSON.stringify(this.displayTask));
    this.taskSubscription.next(this.displayTask);
  }

}
