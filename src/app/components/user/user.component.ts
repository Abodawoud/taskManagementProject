import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar: unknown;
  @Input({ required: true }) name: unknown;

  get imagePath() {
    return `images/users/${this.avatar}`;
  }

  onSelectUser() {}
}
