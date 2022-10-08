import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { WorkResponseData } from 'src/types/work.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input('data') data: WorkResponseData[] | undefined;

  constructor(private dataService: DataService) {}

  handleSearch(event: Event): void {
    const searchString = (event.target as HTMLInputElement).value;

    if (this.dataService.data) {
      this.dataService.data = this.dataService.cachedData;
      this.dataService.data = this.dataService.data?.filter((e) =>
        e.description.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  }

  ngOnInit(): void {}
}
