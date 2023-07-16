import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  trackTask: any[] = [];
  listTask: any[] = [];

  ngOnInit(): void {

    this.listTask = this.getDataFromLocalStorage();

  }


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
  };

  deleteTask(valueTask: string, indexTask: number) {
    let localStorageData = this.getDataFromLocalStorage();
    localStorageData = localStorageData.filter((element: string, indx: number) => indx !== indexTask);
    window.localStorage.setItem('tasks', JSON.stringify(localStorageData));
    this.setTrackTask(localStorageData);
  };

  editTask(initialValue: string, editedValue: string, indexTask: number) {
    let localStorageData = this.getDataFromLocalStorage();
    localStorageData = localStorageData.map((element: string, indx: number) => element = (element === initialValue && indx === indexTask ? editedValue : element));
    window.localStorage.setItem('tasks', JSON.stringify(localStorageData));
    this.setTrackTask(localStorageData);
  }
}
