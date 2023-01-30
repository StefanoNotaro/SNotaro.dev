import { Component } from '@angular/core';
import { TitleService } from './core/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SNotaro.dev';
  
  constructor(
    private titleService: TitleService, // Initialize title service
  ) {
  }
}
