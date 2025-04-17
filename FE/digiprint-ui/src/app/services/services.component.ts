import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';
import { Service } from '../model/service.model';
import { FooterComponent } from '../components/footer/footer.component';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      id: 1,
      title: 'Easy Printing Setup',
      description: 'Set up your printer in just a few easy steps. 123 Com Setup',
      category: 'setup'
    },
    {
      id: 2,
      title: 'Smart Printing Setup',
      description: 'Set up your printer in just a few simple steps. 123 Com SetUp',
      category: 'setup'
    },
    {
      id: 3,
      title: 'Innovative solutions',
      description: 'We provide managed printing services to enhance your equipment productivity...',
      category: 'solutions'
    }
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // If you want to keep the API call for other services
    this.api.getAllServices().subscribe(data => {
      // You could merge the static content with API data here if needed
    });
  }
}