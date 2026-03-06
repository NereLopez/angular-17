import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
 games = [
    {
      id: 1,
      name: 'The Legend of Zelda: Breath of the Wild',
    },
   {
      id: 2,
      name: 'Super Mario Odyssey',
    },
    {
      id: 3,
      name: 'Red Dead Redemption 2',
    }
  ];
}
