import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-personal-info',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule, TranslateModule],
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
    public pageBaseUrl = window.origin;
    public environment = environment;
    public faIcons = {
        location: faLocationPin,
        email: faEnvelope,
        link: faGlobe,
        linkedin: faLinkedin,
    };
}
