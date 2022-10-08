import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Work, WorkResponseData } from 'src/types/work.type';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data: WorkResponseData[] | undefined;
  public cachedData: WorkResponseData[] | undefined;
  public currentPage: number = 1;
  public itemsPerPage!: number;

  constructor(private http: HttpClient) {}

  getData(): Observable<Work> {
    return this.http.get<Work>('assets/mock/data.json');
  }
}
