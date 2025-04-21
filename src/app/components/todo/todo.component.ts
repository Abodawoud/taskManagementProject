import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '@/models/todo';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-todo',
  imports: [DatePipe],
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
