import { Component, signal } from '@angular/core';
import { ListChampion } from '../../components/champion/list-champion/list-champion';
import { AddChampion } from '../../components/champion/add-champion/add-champion';

@Component({
  selector: 'app-champion',
  imports: [ListChampion, AddChampion],
  templateUrl: './champion.html',
  styleUrl: './champion.css'
})
export class Champion {

  isShown = signal(false);
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
  farewell = signal('leaving');


  estaMostrando = signal(false)
  alternar(){
    this.estaMostrando.update((estaMostrando) => !estaMostrando)
  }
  
  despedida = signal("hasta-la-proxima")
}
