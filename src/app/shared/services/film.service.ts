import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../models/film';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private http: HttpClient) { }

  getfilms(): Observable<Film[]> {
    // récupération via client Http Angular
    return this.http.get<Film[]>(`http://localhost:3000/films`);
  }
}
