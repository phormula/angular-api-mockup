import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Work, WorkResponseData } from 'src/types/work.type';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data: WorkResponseData[] | undefined;
  public cachedData: WorkResponseData[] | undefined;

  constructor(private http: HttpClient) {}

  getData(): void {
    this.http.get<Work>('assets/mock/data.json').subscribe(
      (data: Work) => {
        this.data = data.response.data;
        this.cachedData = data.response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
