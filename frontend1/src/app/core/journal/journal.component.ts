import {Component, OnInit} from '@angular/core';
import {JournalService} from './journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  monthTable: JSON;

  constructor(private service: JournalService) {
    this.monthTable = null;
  }

  ngOnInit(): void {
    console.log('Initialize Journal Component...');
    this.getMonth();
  }

  getMonth(): void {
    this.service.getMonth().subscribe(
      (response) => {
        this.monthTable = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
