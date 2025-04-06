import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /*
  - To use input() signals
  -- avatar = input<string>();
  - If u want it required
  -- avatar = input.required<string>();

  - To use output() signals
  -- select = output<string>(); // don't forget to put <string>
  - output() signals are emitted behind the scenes
  */
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `images/users/${this.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
