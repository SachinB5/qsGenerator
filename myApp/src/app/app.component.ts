import { Component } from '@angular/core';
import { PromptInputComponent } from './component/prompt-input/prompt-input.component';
import { PromptResponseComponent } from './component/prompt-response/prompt-response.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [PromptInputComponent, PromptResponseComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myApp';
  showResponse = false;
  generatePrompt() {
    this.showResponse = true;
  }
}
