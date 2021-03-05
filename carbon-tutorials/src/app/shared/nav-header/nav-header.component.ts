import { Component } from '@angular/core';
import { pagesList } from './pages-list';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent {

  pagesList = pagesList;

  constructor() { }

}
