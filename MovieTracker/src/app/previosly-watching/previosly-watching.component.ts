import { Component } from '@angular/core';
import {FilmPreviewComponent} from "../film-preview/film-preview.component";

@Component({
  selector: 'app-previosly-watching',
  standalone: true,
  imports: [FilmPreviewComponent],
  templateUrl: './previosly-watching.component.html',
  styleUrl: './previosly-watching.component.scss'
})
export class PrevioslyWatchingComponent {
  public arr:number[]=[1,2,3,4,5,6,7,8];
}
