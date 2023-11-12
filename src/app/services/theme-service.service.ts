import { Injectable, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.loadTheme();
  }

  setDarkTheme(isDarkTheme: boolean) {
    if (isDarkTheme) {
      this.document.documentElement.style.setProperty('--background-color', '#0B0F19');
      this.document.documentElement.style.setProperty('--text-color', 'white');
    } else {
      this.document.documentElement.style.setProperty('--background-color', '#ebebeb');
      this.document.documentElement.style.setProperty('--text-color', '#2b2b2b');
    }
    sessionStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }

  setChatDarkTheme(isDarkTheme: boolean, element: HTMLElement) {
    if (isDarkTheme) {
      /* Colores oscuros */
      element.style.setProperty('--nav-background-color', '#1b222c');
      element.style.setProperty('--nav-button', '#fff');
      element.style.setProperty('--chatbot', '#111827');
      element.style.setProperty('--chatbot-display', '#1F2937');
      element.style.setProperty('--chatbot-border', '#374355');
      element.style.setProperty('--chatbot-version-controller', '#111827');
      element.style.setProperty('--white', '#000');
      element.style.setProperty('--nav-button-hover', '#c0c0c0');
    } else {
      /* Colores claros */
      element.style.setProperty('--nav-background-color', '#d4d4d4');
      element.style.setProperty('--nav-button', '#2b2b2b');
      element.style.setProperty('--chatbot', '#c4c4c4');
      element.style.setProperty('--chatbot-display', '#ececec');
      element.style.setProperty('--chatbot-border', '#bbbbbb');
      element.style.setProperty('--chatbot-version-controller', '#979797');
      element.style.setProperty('--white', '#fff');
      element.style.setProperty('--nav-button-hover', '#444444');
    }
    sessionStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }

  loadTheme() {
    const isDarkTheme = sessionStorage.getItem('isDarkTheme');
    if (isDarkTheme != null) {
      this.setDarkTheme(JSON.parse(isDarkTheme));
    }
  }
}
