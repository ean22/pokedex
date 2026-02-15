import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonModel } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseUrl: string = "https://pokeapi.co/api/v2/";

  constructor(private httpClient: HttpClient) {};

  getPokemon(name: string): Observable<PokemonModel> {
    return this.httpClient
        .get<PokemonModel>(`${this.baseUrl}/pokemon/${name}`);
  }
}
