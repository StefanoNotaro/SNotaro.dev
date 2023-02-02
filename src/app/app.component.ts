import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TitleService } from './share/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public headerHeight = 0;

  constructor(
    private titleService: TitleService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.titleService.subscribe();
  }

  public onHeaderHeightChanged(headerHeight: number): void {
    if (this.headerHeight !== headerHeight) {
      this.headerHeight = headerHeight;
      this.changeDetectorRef.detectChanges();
    }
  }
}
