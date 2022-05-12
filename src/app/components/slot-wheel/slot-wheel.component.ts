import { SlotService } from './../../services/slot.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slot-wheel',
  templateUrl: './slot-wheel.component.html',
  styleUrls: ['./slot-wheel.component.css']
})
export class SlotWheelComponent implements OnInit {

  constructor(public slotService: SlotService) { }

  ngOnInit(): void {
  }

}
