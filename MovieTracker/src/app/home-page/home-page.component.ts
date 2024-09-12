import { Component } from '@angular/core';
import {FilmPreviewComponent} from "../film-preview/film-preview.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FilmPreviewComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public currently:number[]=[1,2]
  public previously:number[]=[1,2,3,4,5,6,7]
  public suggested:number[] = [1,2,3,4,]
}
