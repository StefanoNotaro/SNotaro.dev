import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private suffix: string = ' | Portfolio';

  constructor(
    private router: Router,
    private title: Title
  ){
  }

  public subscribe(): void {
    this.router.events
    .pipe( filter(event => event instanceof NavigationEnd) )
    .subscribe(x => {
      console.log(x);
      this.title.setTitle(`Stefano Notaro${this.suffix}`);
    });
  }
}