import { Component, HostListener, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'SanyamShilpakar';

  activeSection: string = 'home';
  sectionIds = ['home', 'work', 'projects', 'skills', 'contact'];
  darkMode: boolean = false;
  zoomed: boolean = false;
  activeModal: number | null = null;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { } // copnstructor for the renderer between dark and light theme

  //nav back listening code
  setActive(section: string) {
    this.activeSection = section;
  }

  //helper for scroll listening
  ngAfterViewInit() {
    this.onScroll();
  }

  //scroll listening code
  @HostListener('window:scroll', [])
  onScroll() {
    let currentSection = this.activeSection;

    for (const sectionId of this.sectionIds) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const offset = window.innerHeight / 2;

        if (rect.top <= offset && rect.bottom >= offset) {
          currentSection = sectionId;
          break;
        }
      }
    }

    if (currentSection !== this.activeSection) {
      this.activeSection = currentSection;
    }
  }

  // dark to light theme switch
  toggleTheme() {
    this.darkMode = !this.darkMode;

    this.sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        if (this.darkMode) {
          this.renderer.removeClass(section, 'light-theme');
          this.renderer.addClass(section, 'dark-theme');
        } else {
          this.renderer.removeClass(section, 'dark-theme');
          this.renderer.addClass(section, 'light-theme');
        }
      }
    });
  }

  toggleZoom(event: MouseEvent) {
    event.stopPropagation();
    this.zoomed = !this.zoomed;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const clickedInside = this.elRef.nativeElement
      .querySelector('.profile-photo')
      .contains(event.target);
    if (!clickedInside && this.zoomed) {
      this.zoomed = false;
    }
  }

  openModal(id: number) {
    this.activeModal = id;
  }

  closeModal() {
    this.activeModal = null;
  }

  //assigns custom name for each section so that it can be generated
  getSectionName(sectionId: string): string {
  switch (sectionId) {
    case 'home':
      return 'Welcome, I am';
    case 'work':
      return 'Experiences';
    case 'projects':
      return 'Personal Projects';
    case 'skills':
      return 'Skills';
    case 'contact':
      return 'Contact Me';
    default:
      return '';
  }
}
}
