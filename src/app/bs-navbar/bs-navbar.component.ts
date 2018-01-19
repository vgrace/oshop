import { AppUser } from './../models/app-user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit, OnDestroy{
  appUser: AppUser; 
  cart$: Observable<ShoppingCart>

  constructor(private auth: AuthService, private shoppingcartService: ShoppingCartService) { 
    // Don't need to subscribe, since we are not going to have multiple instances of this object (navbar) -> no memory leaks
    // Also if somathing changes in the firebase db ex. isAdmin is set to false, since we have a subscription the change will show in the page immediatelly
    
  }

  logout(){
    this.auth.logout(); 
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser); 
    this.cart$ = await this.shoppingcartService.getCart();
    
  }

  ngOnDestroy() {

  }
}
