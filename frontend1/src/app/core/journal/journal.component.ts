import {Component, OnInit} from '@angular/core';
import {JournalService} from './journal.service';
import {JournalModel} from './journal-model';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  monthTable: JSON;

  constructor(private service: JournalService) {
  }

  ngOnInit(): void {
    this.getMonth();
  }

  getMonth(): JournalModel {
    return this.service.getMonth();
    // this.service.getMonth().subscribe(
    //   (response) => {
    //     this.monthTable = response;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
