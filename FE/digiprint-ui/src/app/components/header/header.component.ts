import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  printerBrands = [
    'InkJet',
    'LaserJet',
    'OfficeJet',
    'Pixma',
    'Maxify',
    'XP',
    'EcoTank',
    'WorkForce'
  ];
}