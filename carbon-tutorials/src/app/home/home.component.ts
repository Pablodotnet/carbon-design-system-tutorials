import { Component, OnInit } from '@angular/core';
import { MockList } from './MockList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  someList: { name: string, show: boolean }[] = MockList;

  constructor() { }

  ngOnInit(): void {
  }

  handleTileClick($event: any) {
    console.log('$event: ', $event);
  }

}
