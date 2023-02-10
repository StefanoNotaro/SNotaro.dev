import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
    public environment = environment;
    public String = String;
}
