import { Component, Input } from '@angular/core';
import { IAddToDo } from 'src/app/interfaces/IAddToDO';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent {
  @Input() messageBtn: string = '';
  @Input() props:IAddToDo = {} as IAddToDo
  valueTask: string = '';

  onChangeValueTask = (e:any) => {
    this.valueTask = e.target.value
  };

  callParent = (e:any) => {
    this.props.addTaskChild(this.valueTask);
    this.valueTask = "";
  };

}
