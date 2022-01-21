import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  baseUrl = 'https://api.themoviedb.org/3/';

  options = {
    api_key: 'cca6175097ce75bf3b6fa679e974860d',
    language: 'pt-BR'
  }

  constructor() { }
}
