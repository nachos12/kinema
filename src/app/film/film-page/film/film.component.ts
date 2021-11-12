import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {


  @Input() film!: Film;

  date: string = Date();

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

}
