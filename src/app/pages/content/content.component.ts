import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  coverUrl: string = "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
  createdAt: string = "Jan 15, 2024"
  title: string = "Ouça e execute"
  description: string = "aaaaaaaaaaaaaaaaaaaaaaaaa"
}
