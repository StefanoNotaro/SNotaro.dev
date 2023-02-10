import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private router: Router,
    private title: Title,
    private translateService: TranslateService
  ) {
  }

  public subscribe(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.translateService.get('Common.TabTitleSuffix').subscribe((res: string) => {
          this.title.setTitle(`Stefano Notaro${res}`);
        })
      });
  }
}
