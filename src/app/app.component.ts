import { Component, OnInit } from '@angular/core';
import { TitleService } from './share/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SNotaro.dev';
  
  constructor(
    private titleService: TitleService,
  ) {
  }

  public ngOnInit(): void {
    this.titleService.subscribe();
  }
}
