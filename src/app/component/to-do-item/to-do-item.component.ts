import { Component, Input, OnInit } from '@angular/core';
import { ITaskActions } from '../../interfaces/ITaskActions';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
  @Input() taskActions: ITaskActions = {} as ITaskActions;
  @Input() description: any;
  @Input() index: number = 0;
  isEditing: boolean = false;
  initialValue: string = "";
  isDone: boolean = true;



  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  deleteItem = (event: any) => {
    this.taskActions.deleteTaskChild(this.description, this.index);
  }

  onEdit = (event: any) => {
    this.initialValue = this.description
    this.isEditing = true;
  }

  saveChanges = (event: any) => {
    this.taskActions.editTaskChild(this.initialValue, this.description, this.index);
    this.isEditing = false;
  }

  onChangeValueTask = (event: any) => {
    this.description = event.target.value;
  };

  taskDone = (event: any) => {
    this.isDone = !this.isDone;
  }
}
