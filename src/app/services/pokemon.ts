import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseUrl: string = "https://pokeapi.co/api/v2/";

  constructor(private httpClient: HttpClient) {};

  getPokemon(name: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/pokemon/${name}`);
  }
}
