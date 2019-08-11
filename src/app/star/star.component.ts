import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { faThumbsUp, faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {

  faThumbsUp = faThumbsUp;
  faHeart = faHeart;

  boxWidth: number;

  @Input()
  rating: number;

  @Output()
  ratingClick = new EventEmitter<string>();

  ngOnChanges(){
   
  this.boxWidth = this.rating * 80/5;

  }

  ratingShow(): void{
   this.ratingClick.emit(`Rating is : ${this.rating}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
