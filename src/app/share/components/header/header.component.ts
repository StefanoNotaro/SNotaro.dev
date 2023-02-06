import { AfterContentChecked, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentChecked {
  public environment = environment;
  public minHeader = false;
  private currentHeaderHeight = 0;

  @Output() heightChanged = new EventEmitter<number>();

  @ViewChild('header', { static: true }) headerRef!: ElementRef<HTMLDivElement>;

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

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }
  
  public ngAfterContentChecked(): void {
    if (this.currentHeaderHeight !== this.headerRef.nativeElement.getBoundingClientRect().height) {
      this.currentHeaderHeight = this.headerRef.nativeElement.getBoundingClientRect().height;
      this.heightChanged.emit(this.currentHeaderHeight);
    }
  }

  @HostListener('window:scroll', ['$event'])
  public handleScroll() {
    const previousValue = this.minHeader;
    this.minHeader = window.scrollY > 100;

    if (previousValue !== this.minHeader) {
      this.changeDetectorRef.detectChanges();
      const newHeight = this.headerRef.nativeElement.getBoundingClientRect().height;
      this.headerRef.nativeElement.style.height = this.minHeader ? '' : `${newHeight}px`;
    }
  }
}
