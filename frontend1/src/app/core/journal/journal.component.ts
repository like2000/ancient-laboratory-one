import {Component, OnInit} from '@angular/core';
import {JournalService} from './journal.service';
import {MatTableDataSource} from '@angular/material/table';

export interface MonthRow {
  Week: number;
  Mon: number;
  Tue: number;
  Wed: number;
  Thu: number;
  Fri: number;
  Sat: number;
  Sun: number;
}

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  monthTable: MonthRow[];
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  constructor(private service: JournalService) {
    this.monthTable = [
      {Week: 36, Mon: 1234, Tue: 1.0, Wed: 2.0, Thu: 3.0, Fri: 4.0, Sat: 5.0, Sun: 6.0},
      {Week: 37, Mon: 7.0, Tue: 8.0, Wed: 9.0, Thu: 10.0, Fri: 11.0, Sat: 12.0, Sun: 13.0},
    ];
  }

  ngOnInit(): void {
    this.getMonth();
  }

  getMonth(): void {
    this.service.getMonth().subscribe(
      (response) => {
        this.monthTable = response.data;
        this.displayedColumns = response.header;
        this.dataSource = new MatTableDataSource<any>(this.monthTable);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
