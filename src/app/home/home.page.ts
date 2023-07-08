import { Component } from '@angular/core';
import data from '../../data/data.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  data:any = data;

}
