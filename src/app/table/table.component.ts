import { Component, Input, OnInit } from '@angular/core';
import { WorkResponseData } from 'src/types/work.type';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input('data') data: WorkResponseData[] | undefined;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
