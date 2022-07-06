import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Image, Transaction } from 'src/app/core/models/response';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandableComponent implements OnInit {

  @Input() transaction: Transaction;
  imageIndex = 0;
  images: Image[];

  constructor() { }

  ngOnInit(): void {
    this.images = this.transaction.images;
  }

  zoom(): void {
    document.getElementById('img').click();
  }

  goNext(): void{
    this.imageIndex ++;
  }

  goPrev(): void{
    this.imageIndex --;
  }

}
