import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// Cdst Tables Elements
import { MockMovies } from './MockMovies';
// Cdst Tables Interfaces
import { Movie } from '../interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class CdstTableService {

  movies = MockMovies;

  constructor() { }

  getAllMovies(): Observable<Movie[]> {
    return of(this.movies).pipe(
      delay(4000)
    );
  }
}
