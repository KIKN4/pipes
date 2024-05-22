import { Component, NgModule } from '@angular/core';
import { Person } from '../../type/person';
import { FRUITS, PERSONS } from '../../array';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { Fruit } from '../../type/fruit';
import { FruitComponent } from '../../components/fruit/fruit.component';
import { WrapFnPipe } from '../../wrap-fn.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent, FruitComponent, WrapFnPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  filterUsersKey = '';
  filterFruitsKey = '';

  constructor() {
    this.filterUsersFn = this.filterUsersFn.bind(this);
    this.filterFruitsFn = this.filterFruitsFn.bind(this);
  }

  users: Person[] = PERSONS;
  fruits: Fruit[] = FRUITS;

  filterUsersFn(key: string): Person[] {
    return this.users.filter(
      (user) =>
        user.firstname.toLowerCase().includes(key.toLowerCase()) ||
        user.lastname.toLowerCase().includes(key.toLowerCase())
    );
  }

  filterFruitsFn(key: string) {
    return this.fruits.filter((fruit) => fruit.name.includes(key));
  }
}
