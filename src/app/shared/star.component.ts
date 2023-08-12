import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class starComponenet implements OnChanges {
    
   @Input() rating: number = 0;
    cropWidth: number = 93;

    @Output() ratingClicked: EventEmitter<string>
    = new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * this.cropWidth/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
    }
}