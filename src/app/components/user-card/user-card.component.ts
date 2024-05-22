import { Component, Input } from '@angular/core';
import { Person } from '../../type/person';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input({ required: true }) user!: Person;
}
