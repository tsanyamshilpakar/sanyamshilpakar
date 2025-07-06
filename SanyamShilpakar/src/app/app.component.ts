import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SanyamShilpakar';

  activeSection: string = 'home';

  setActive(section: string) {
    this.activeSection = section;
  } 
 // menuOpen = false;
  
  //toggleMenu() {
    //this.menuOpen = !this.menuOpen;
  //}

  //closeMenu() {
    //this.menuOpen = false;
  //}
}
