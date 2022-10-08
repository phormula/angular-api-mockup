import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Work, WorkResponseData } from 'src/types/work.type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  data: any;
  cachedData: WorkResponseData[] | undefined;
  currentPage: number = 1;
  itemsPerPage!: number;
  totalItems!: number;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData(): void {
    this.dataService.getData().subscribe(
      (data: Work) => {
        this.data = data.response.data;
        this.currentPage = data.response.current_page;
        this.itemsPerPage = data.response.per_page;
        this.totalItems = data.response.total;
        this.cachedData = data.response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
