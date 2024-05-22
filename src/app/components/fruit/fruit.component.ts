import { Component, Input } from '@angular/core';
import { Fruit } from '../../type/fruit';

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [],
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.css',
})
export class FruitComponent {
  @Input({ required: true }) fruit!: Fruit;
}
