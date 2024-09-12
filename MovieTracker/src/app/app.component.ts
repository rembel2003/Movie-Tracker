import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomePageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MovieTracker';
}
