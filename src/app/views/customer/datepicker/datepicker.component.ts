import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  model!: NgbDateStruct;
	date!: { year: number; month: number; };

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }

  selectToday() {
		this.model = this.calendar.getToday();
	}

}
