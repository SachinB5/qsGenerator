import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prompt-input',
  imports: [FormsModule],
  templateUrl: './prompt-input.component.html',
  styleUrl: './prompt-input.component.css',
})
export class PromptInputComponent {
  userInput: string = '';
}
