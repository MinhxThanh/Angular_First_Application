import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent{
  @Input()
  rating: number = 0

  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>()

  rate() {
    console.log('Rating here!')
    this.ratingClicked.emit('Rating: '+ this.rating)
  }
}
