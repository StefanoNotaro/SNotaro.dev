import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {}
