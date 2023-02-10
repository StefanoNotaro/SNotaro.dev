import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-work-experience',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {}
