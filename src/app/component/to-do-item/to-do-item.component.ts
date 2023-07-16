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
  isEditing: boolean = false;
  initialValue: string = "";
  isDone: boolean = true;



  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  deleteItem = (event: any, property: any) => {
    this.taskActions.deleteTaskChild(this.description, parseInt(event.target.id));
  }

  onEdit = () => {
    this.initialValue = this.description
    this.isEditing = true;
  }

  saveChanges = (event: any, property: any) => {
    this.taskActions.editTaskChild(this.initialValue, this.description, parseInt(event.target.id));
    this.isEditing = false;
  }

  onChangeValueTask = (event: any, property: any) => {
    this.description = event.target.value;
  };

  taskDone = (event: any) => {
    this.isDone = !this.isDone;
  }
}
