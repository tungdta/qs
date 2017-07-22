import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyDetail } from './components/companyDetail/companyDetail.component';
import { CompanyHome } from './components/companyHome/companyHome.component';
const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: "Company" },
    component: CompanyComponent,
    children: [
      { path: '', component: CompanyHome },
      { path: 'detail/:company', component: CompanyDetail }
    ]
  }
];
export const CompanyRouting = RouterModule.forChild(routes);
