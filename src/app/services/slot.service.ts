import { Injectable } from '@angular/core';
import { SlotItem } from '../models/SlotItem';

@Injectable({
  providedIn: 'root'
})
export class SlotService {
  credits: number = 100;
  bet: number = 10;
  win: boolean = false;
  betIncrement = 10;

  slotBoard: SlotItem[] = [
    { type: 'seven', order: 1, reel: 1, row: 1 },
    { type: 'seven', order: 2, reel: 2, row: 1 },
    { type: 'seven', order: 3, reel: 3, row: 1 },
    { type: 'seven', order: 4, reel: 1, row: 2 },
    { type: 'seven', order: 5, reel: 2, row: 2 },
    { type: 'seven', order: 6, reel: 3, row: 2 },
    { type: 'seven', order: 7, reel: 1, row: 3 },
    { type: 'seven', order: 8, reel: 2, row: 3 },
    { type: 'seven', order: 9, reel: 3, row: 3 },
  ]

  imageMap: { [key: string]: string } = {
    seven: '/assets/Lucky-7.png',
    cherry: '/assets/cherry.jpg',
    bar: '/assets/bar.png',
    goldbar: '/assets/goldbar.jpg',
    grapes: '/assets/grapes.jpg',
    lemon: '/assets/lemon.png',
  }

  imageTypes: string[] = ['seven', 'cherry', 'bar', 'goldbar', 'grapes', 'lemon'];

  constructor() { }

  spinWheel() {
    if (this.credits - this.bet >= 0) {
      this.slotBoard.forEach(item => {
        item.type = this.imageTypes[Math.floor(Math.random() * 6)];
      });
      this.credits -= this.bet;
      this.checkForWin()
    }
    else {
      alert('Not enough credits :(');
    }
  }

  checkForWin() {
    let row1 = this.slotBoard.filter(obj => {
      return obj.row === 1;
    });
    let row2 = this.slotBoard.filter(obj => {
      return obj.row === 2;
    });
    let row3 = this.slotBoard.filter(obj => {
      return obj.row === 3;
    });
    let topDiagonal = this.slotBoard[0].type === this.slotBoard[4].type && this.slotBoard[4].type === this.slotBoard[8].type;
    let bottomDiagonal = this.slotBoard[6].type === this.slotBoard[4].type && this.slotBoard[4].type === this.slotBoard[2].type;

    if (row1.every(data => data.type === row1[0].type) || row2.every(data => data.type === row2[0].type) || row3.every(data => data.type === row3[0].type) || topDiagonal || bottomDiagonal) {
      this.win = true;
      this.credits += this.bet * 2;
      setTimeout(() => this.resetWin(), 4000); // 2500 is millisecond
    }

  }

  resetWin() {
    this.win = false;
  }

  increaseBet() {
    if (this.credits - this.bet < this.betIncrement) {
      alert('You can\'t bet more than you have!');
    }
    else {
      this.bet += this.betIncrement;
    }
  }

  decreaseBet() {
    if (this.bet > this.betIncrement) {
      this.bet -= this.betIncrement;
    }
    else (alert('You can\'t bet less than ' + this.betIncrement + '!'))
  }
}
