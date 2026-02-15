import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonModel } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseUrl: string = "https://pokeapi.co/api/v2/";

  constructor(private httpClient: HttpClient) {};

  getPokemon(name: string): Observable<PokemonModel> {
    return this.httpClient
        .get<any>(`${this.baseUrl}/pokemon/${name}`)
        .pipe(
          map(response => ({
            id: response.id,
            name: response.name,
            spriteURL: response.sprites.front_default,
            cryURL: response.cries.latest,
            types: response.types.map((t:any) => t.type.name)

          }))
        )
  }
}
