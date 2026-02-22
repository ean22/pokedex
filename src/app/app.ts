import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon';
import { PokemonModel } from './models/pokemon';
import { SideBarComponent } from './components/side-bar.component/side-bar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('pokedex');
  
  private pokemon!: PokemonModel;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon('pikachu')
        .subscribe(data => {
          this.pokemon = data;
          
          console.log(this.pokemon);
        })
  }

  
}

