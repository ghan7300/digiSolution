// footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this import

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule], // Now properly imported
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}