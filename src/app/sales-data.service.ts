import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {
  private apiURL = 'https://65388545a543859d1bb185eb.mockapi.io/api/sales';

  constructor(private http: HttpClient) {}

  getSales(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }
}
