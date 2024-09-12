import { Component } from '@angular/core';
import {FilmPreviewComponent} from "../film-preview/film-preview.component";

@Component({
  selector: 'app-currently-watching',
  standalone: true,
  imports: [FilmPreviewComponent],
  templateUrl: './currently-watching.component.html',
  styleUrl: './currently-watching.component.scss'
})
export class CurrentlyWatchingComponent {
  public arr:number[]=[1,2,3,4,5,6,7,8];

}
