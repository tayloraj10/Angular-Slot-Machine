import { Component, OnInit } from '@angular/core';
import { SlotService } from 'src/app/services/slot.service';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;

  constructor(public slotService: SlotService) { }

  ngOnInit(): void {
  }

}
