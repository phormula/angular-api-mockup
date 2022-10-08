import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private dataTab: TableComponent) {}

  handleSearch(event: Event): void {
    const searchString = (event.target as HTMLInputElement).value;

    if (this.dataTab) {
      this.dataTab.data = this.dataTab.cachedData;
      this.dataTab.data = this.dataTab.data?.filter(
        (e: { description: string }) =>
          e.description.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  }

  ngOnInit(): void {}
}
