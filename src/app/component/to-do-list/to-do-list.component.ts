import { Component, Input, OnInit } from '@angular/core';
import { IAddToDo } from 'src/app/interfaces/IAddToDO';
import { ITaskActions } from 'src/app/interfaces/ITaskActions';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  trackTask: any[] = [];
  listTask: any[] = [];


  ngOnInit(): void {

    this.readLocalStorage();

  }

  private readLocalStorage() {
    this.listTask = this.getDataFromLocalStorage();
  }

  childProps: IAddToDo = {
    addTaskChild: (description: string) => this.addTask(description),
    messageBtn: 'Add To Do'
  };

  toDoItemProps: ITaskActions = {
    deleteTaskChild: (valueTask: string, indexTask: number) => this.deleteTask(valueTask, indexTask),
    editTaskChild: (initialValue: string, editedValue: string, indexTask: number) => this.editTask(initialValue, editedValue, indexTask)
  };


  getDataFromLocalStorage = () => {
    let data = window.localStorage.getItem('tasks');
    if (data && data.length > 0) {
      return JSON.parse(data);
    }
    else {
      return [];
    }
  };

  private setTrackTask(stringyLocalStorage: string): void {
    this.trackTask.push(stringyLocalStorage);
  }

  addTask(valueTask: string) {
    let localStorageData = this.getDataFromLocalStorage();
    localStorageData.push(valueTask);
    window.localStorage.setItem('tasks', JSON.stringify(localStorageData));
    this.setTrackTask(localStorageData);
    this.readLocalStorage();
  };

  deleteTask(valueTask: string, indexTask: number) {
    let localStorageData = this.getDataFromLocalStorage();
    localStorageData = localStorageData.filter((element: string, indx: number) => indx !== indexTask);
    window.localStorage.setItem('tasks', JSON.stringify(localStorageData));
    this.setTrackTask(localStorageData);
    this.readLocalStorage();
  };

  editTask(initialValue: string, editedValue: string, indexTask: number) {
    let localStorageData = this.getDataFromLocalStorage();
    localStorageData = localStorageData.map((element: string, indx: number) => {
      return element === initialValue && indx === indexTask ? editedValue : element
    });
    window.localStorage.setItem('tasks', JSON.stringify(localStorageData));
    this.setTrackTask(localStorageData);
    this.readLocalStorage();
  }
}
