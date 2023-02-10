import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TitleService } from './share/services/title.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public headerHeight = 0;

    constructor(private titleService: TitleService, private changeDetectorRef: ChangeDetectorRef, private translateService: TranslateService) {
        this.translateService.use(this.translateService.defaultLang);
    }

    public ngOnInit(): void {
        this.translateService.use(this.translateService.defaultLang);
        this.titleService.subscribe();
    }

    public onHeaderHeightChanged(headerHeight: number): void {
        if (this.headerHeight !== headerHeight) {
            this.headerHeight = headerHeight;
            this.changeDetectorRef.detectChanges();
        }
    }
}
