import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '@environments/environment';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    public environment = environment;

    public get currentYear(): number {
        return new Date().getFullYear();
    }
}
