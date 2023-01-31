import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, FontAwesomeModule, NgOptimizedImage ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public environment = environment;

  public faIcons = {
    paperPlane: faPaperPlane,
    socialMedia: [
      {
        icon: faLinkedin,
        href: environment.linkedinHref,
        hover: false,
      },
      {
        icon: faGithub,
        href: environment.githubHref,
        hover: false,
      },
      {
        icon: faWhatsapp,
        href: environment.whatsappHref,
        hover: false,
      },
    ]
  };
}
