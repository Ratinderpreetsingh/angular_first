import { Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { CategoryComponent } from './Components/category/category.component';
import { AboutComponent } from './Components/about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { authGaurdGuard } from './guards/auth-gaurd.guard';
import { AuthCommonComponent } from './auth/auth-common/auth-common.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OrderComponent } from './Components/order/order.component';
import { superadminGuard } from './guards/superadmin.guard';
import { adminGuard } from './guards/admin.guard';
import { exceutiveGuard } from './guards/exceutive.guard';
import { UnautorizedComponent } from './Components/unautorized/unautorized.component';
import { SubCategoryComponent } from './Components/sub-category/sub-category.component';
import { CustomerComponent } from './Components/customer/customer.component';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, // Redirect root to dashboard

    {
        path:'auth',
        component:AuthCommonComponent,
        children:[
            {
                path: 'login',
                component: LoginComponent,

            },
            {
                path: 'forgot',
                component: ForgotComponent,

            }
        ]
    },
    {
        path: 'main', 
        component:LayoutComponent,
        canActivate:[authGaurdGuard],
        children: [ 
               
              {
                    path:'superadmin',
                    canActivate:[superadminGuard],
                    children:[
                        {
                            path: 'dashboard', 
                            component: DashboardComponent, 
                        },
                        {
                            path: 'customer',
                            component: CustomerComponent,

                        },
                        {
                            path: 'product',
                            component: ProductComponent,
                        },
                        {
                            path: 'category',
                            component: CategoryComponent,
                        },
                        {
                            path: 'subcategory',
                            component: SubCategoryComponent,
                        },
                        {
                            path: 'order',
                            component: OrderComponent,
                        },
                        {
                            path: 'about',
                            component: AboutComponent
                        }

                    ]
           },


           {
             path:'admin',
             canActivate:[adminGuard],
            children:[
                
                    {
                        path: 'dashboard', 
                        component: DashboardComponent, 
                    },
                    {
                        path: 'product',
                        component: ProductComponent,
                    },
                
            ]
           },


           {
            path:'exceutive',
            canActivate:[exceutiveGuard],
            children:[
                
                    { path: 'dashboard', component: ProductComponent },

                
            ]
           },


           {
            path:'unauthorised',
            component:UnautorizedComponent
        }
            
         
        ]
    },
   
];
