import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private totalItems = 4;
  currentItemIndex = 0;
  increaseItemIndex() {
    this.currentItemIndex = (this.currentItemIndex + 1) % this.totalItems;
  }
  decreaseItemIndex() {
    this.currentItemIndex = (this.currentItemIndex - 1 + this.totalItems) % this.totalItems;
  }
}
