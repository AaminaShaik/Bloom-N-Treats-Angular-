import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { adminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { FindGiftComponent } from './find-gift/find-gift.component';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { CommonModule } from '@angular/common';
import { BirthdayComponent } from './birthday/birthday.component';
import { ReviewComponent } from './review/review.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { ChocolatesComponent } from './chocolates/chocolates.component';
import { BestOfCakesComponent } from './best-of-cakes/best-of-cakes.component';
import { BestOfFlowersComponent } from './best-of-flowers/best-of-flowers.component';
import { UniqueComponent } from './unique/unique.component';
import { IndoorPlantsComponent } from './indoor-plants/indoor-plants.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { GiftHamperComponent } from './gift-hamper/gift-hamper.component';
import { OrderComponent } from './order/order.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    MyAccountComponent,
    MyOrdersComponent,
    ContactUsComponent,
    LogoutComponent,
    CardComponent,
    adminComponent,
    FooterComponent,
    FindGiftComponent,
    CategoryComponent,
    CustomerComponent,
    HeaderAdminComponent,
    BirthdayComponent,
    ReviewComponent,
    AnniversaryComponent,
    ChocolatesComponent,
    BestOfCakesComponent,
    BestOfFlowersComponent,
    UniqueComponent,
    IndoorPlantsComponent,
    CartComponent,
    AboutComponent,
    GiftHamperComponent,
    OrderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
