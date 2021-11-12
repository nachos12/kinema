import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/shared/models/film';
import { FilmService } from 'src/app/shared/services/film.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss']
})
export class FilmPageComponent implements OnInit {


  films: Film[] = [];

  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
    this.filmService.getfilms()
      .subscribe((films:Film[])=> this.films = films);
  }

}
