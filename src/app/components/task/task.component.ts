import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { TodoComponent } from '../todo/todo.component';
import { DUMMY_TODOS } from '@/dummy-todos';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-task',
  imports: [TodoComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userId?: string;
  @Input({ required: true }) name?: string;

  todos = DUMMY_TODOS;
  isAddingNewTask = false;

  get selectedUserTodos() {
    return this.todos.filter((todo) => todo.userId === this.userId);
  }

  onCompleteTodo(todoId: string) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  addNewTask() {
    this.isAddingNewTask = true;
  }
}
