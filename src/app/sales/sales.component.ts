import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../sales-data.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
})
export class SalesComponent implements OnInit {
  sales: any[] = [];
  //const franchise = franchisesMap.get(sale.franchiseId);
  //const movie = moviesMap.get(sale.movieId);


  constructor(private salesDataService: SalesDataService) {}

  ngOnInit(): void {
    this.salesDataService.getSales().subscribe(data => {
      this.sales = data;
    });
  }

  onEdit(): void {
    alert('En construcción');
  }

  onDelete(): void {
    alert('En construcción');
  }
}
