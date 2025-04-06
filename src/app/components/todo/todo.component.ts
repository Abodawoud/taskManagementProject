import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '@/models/todo';
@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input({ required: true }) todo!: Todo;
  @Output() complete = new EventEmitter<string>();

  onCompleteTodo() {
    this.complete.emit(this.todo.id);
  }
}
