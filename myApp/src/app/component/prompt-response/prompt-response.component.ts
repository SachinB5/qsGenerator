import { Component, inject } from '@angular/core';
import { DataService } from '../../data.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-prompt-response',
  imports: [NgIf,AsyncPipe,NgxTypedJsModule,NgFor],
  templateUrl: './prompt-response.component.html',
  styleUrl: './prompt-response.component.css',
})
export class PromptResponseComponent {
  prompt = inject(DataService).prompts;
}
