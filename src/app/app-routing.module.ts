import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthGuard } from './auth.guard';
import { CategoryComponent } from './category/category.component';
import { adminComponent } from './admin/admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { CustomerComponent } from './customer/customer.component';
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
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component:HeaderComponent },
  {
    path: 'header', 
    component: HeaderComponent,
    children: [
   
    { path: 'login', component: LoginComponent },
    {path:'home',component:HomeComponent},
    { path: 'register', component: RegisterComponent },
    // { path: 'header', component: HeaderComponent },
    { path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard] },
    { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
    { path: 'card', component: CardComponent },
    {path:'birthday',component:BirthdayComponent},
    {path:'order',component:OrderComponent},
    {path:'anniversary',component:AnniversaryComponent},
    {path:'chocolates',component:ChocolatesComponent},
    {path:'bestOfCakes',component:BestOfCakesComponent},
    {path:'bestOfFlowers',component:BestOfFlowersComponent},
    {path:'unique',component:UniqueComponent},
    {path:'indoorPlants',component:IndoorPlantsComponent},
    {path:'cart',component:CartComponent, canActivate: [AuthGuard]},
    {path:'about',component:AboutComponent},
    {path:'giftHamper',component:GiftHamperComponent},
    {path:'contactUs',component:ContactUsComponent}
  
    ]
  },
    
    {
      path: 'header-admin', 
      component: HeaderAdminComponent,
      children: [
        { path: 'products', component: adminComponent},
        { path: 'customer', component: CustomerComponent },  
        { path: 'categories', component: CategoryComponent }
      ]
    }
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
