import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../../product.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
 
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
 
  subscription: Subscription;
 
  displayedColumns = ['title', 'price', 'edit'];
  dataSource =  new MatTableDataSource();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
    .subscribe(products => {
      this.dataSource.data = products;
    });
  }
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
 
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

// import { ProductService } from './../../product.service';
// import { Component, OnInit } from '@angular/core';
// import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
// import { Subscription } from 'rxjs/Subscription';
// import { Product } from '../../models/product';

// @Component({
//   selector: 'app-admin-products',
//   templateUrl: './admin-products.component.html',
//   styleUrls: ['./admin-products.component.css']
// })

// export class AdminProductsComponent implements OnInit, OnDestroy {
//   products: Product[];
//   filteredProducts: any[]; 
//   subscription: Subscription;

//   constructor(private productService: ProductService) { 
//     this.subscription = this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products); 
//   }

//   filter(query: string) {
//     this.filteredProducts = (query) ? 
//     this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
//     this.products; 
//   }

//   ngOnInit() {
//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe(); 
//   }

// }
