export interface ITaskActions {
  deleteTaskChild(description: string, id: number): void;
  editTaskChild(initialValue: string, description: string, id: number): void;
  
}