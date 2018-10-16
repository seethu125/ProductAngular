import { Service } from '../../model/service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services: Service[] = [
  {id: 1, name: 'Cleaning', category: 'H', description: 'cleaning service', image_url: ''},
  {id: 2, name: 'Cleaning', category: 'H', description: 'cleaning service', image_url: ''},
  {id: 3, name: 'Cleaning', category: 'H', description: 'cleaning service', image_url: ''}
  ];
  constructor() { }

  ngOnInit() {
  }

}
