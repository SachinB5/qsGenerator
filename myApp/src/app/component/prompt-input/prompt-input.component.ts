import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prompt-input',
  imports: [FormsModule],
  templateUrl: './prompt-input.component.html',
  styleUrl: './prompt-input.component.css',
})
export class PromptInputComponent {
  userInput: string = '';
  @Output() generate = new EventEmitter();
  generatePrompt() {
    this.generate.emit(this.userInput);
  }
}
