import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, FontAwesomeModule ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public environment = environment;

  public linkedinHover = false;

  public faIcons = {
    paperPlane: faPaperPlane,
    socialMedia: {
      linkedin: faLinkedin,
    },
  }

  onLinkedinHover(hover: boolean) {
    this.linkedinHover = hover;
  }
}
