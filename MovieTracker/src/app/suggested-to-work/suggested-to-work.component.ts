import { Component } from '@angular/core';
import {FilmPreviewComponent} from "../film-preview/film-preview.component";

@Component({
  selector: 'app-suggested-to-work',
  standalone: true,
  imports: [FilmPreviewComponent],
  templateUrl: './suggested-to-work.component.html',
  styleUrl: './suggested-to-work.component.scss'
})
export class SuggestedToWorkComponent {
  public arr:number[]=[1,2,3,4,5,6,7,8];
}
