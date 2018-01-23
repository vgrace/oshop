import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AdminOrdersComponent } from 'app/admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from 'app/admin/components/admin-products/admin-products.component';
import { ProductFormComponent } from 'app/admin/components/product-form/product-form.component';
import { AdminAuthGuard } from 'app/admin/services/admin-auth-guard.service';
import { AuthGuard } from 'shared/services/auth-guard.service';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    RouterModule.forChild([
      { path: 'admin/products/new', component:  ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admin/products/:id', component:  ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admin/products', component:  AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admin/orders', component:  AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard] }
    ])
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  providers: [
    AdminAuthGuard,
  ]
})
export class AdminModule { }
