import { Component, ElementRef, OnInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  isDarkTheme:boolean = false;
  isFirstMessage:boolean = false;
  message:string = '';
  sentMessage: string[] = [];

  constructor(private themeService: ThemeServiceService, private el: ElementRef) {
    const isDarkTheme = sessionStorage.getItem('isDarkTheme');
    if (isDarkTheme != null) {
      this.isDarkTheme = JSON.parse(isDarkTheme);
    }
  }
  
  ngOnInit(): void {
    const isDarkTheme = sessionStorage.getItem('isDarkTheme');
    if (isDarkTheme != null) {
      this.isDarkTheme = JSON.parse(isDarkTheme);
      this.themeService.setChatDarkTheme(this.isDarkTheme, this.el.nativeElement);
    }
  }

  toggleDarkMode() {
    this.themeService.setDarkTheme(!this.isDarkTheme);
    this.themeService.setChatDarkTheme(!this.isDarkTheme, this.el.nativeElement);
    this.isDarkTheme = !this.isDarkTheme;
  }

  sendMessage() {
    if (this.message.trim() !== '') {
      this.sentMessage.push(this.message);
      // [Optional] Clean message
      this.message = '';
      this.isFirstMessage = false;
    }
  }

  resetMessage() {
    if (this.sentMessage.length > 0) {
      this.message = this.sentMessage.pop() || '';
    }
  }

  undoMessage() {
    if (this.sentMessage.length > 0) {
      this.sentMessage.pop();
    }
  }

  clearMessage() {
    this.sentMessage = [];
  }
}
