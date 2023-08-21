import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../data/data';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.page.html',
  styleUrls: ['./lyrics.page.scss'],
})

export class LyricsComponent  implements OnInit {

  song:any;

  // will only load once until refresh
  constructor(private route: ActivatedRoute) {
  }

  // will only load once until refresh
  ngOnInit() {
  }

  // will load every component visit
  ionViewDidEnter() {
    console.log('==== 222', this.route.snapshot.queryParams['id']); 
    const id = this.route.snapshot.queryParams['id'];
    
    this.song = data.find((v) => v.id == id);
    console.log('==== ', this.song); 

  }

  getLyrics(flowItem:string) {
    let stringVal = 'this.song.lyrics.en.' + flowItem;
    let content = eval(stringVal);
    return content;
  }

}
