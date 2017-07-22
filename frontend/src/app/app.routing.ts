import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './shared/auth/auth-guard.service'

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [
    { path: '', redirectTo: '/session/signin', pathMatch: 'full' },
    {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule',
      canActivate: [AuthGuard],
      data: { permissions: ['full'] }
    }, {
      path: 'apps',
      loadChildren: './apps/apps.module#AppsModule',
      canActivate: [AuthGuard],
      data: { permissions: ['full'] }
    }, {
      path: 'widgets',
      loadChildren: './widgets/widgets.module#WidgetsModule',
      canActivate: [AuthGuard],
      data: { permissions: ['full'] }
    }, {
      path: 'material',
      loadChildren: './material/material.module#MaterialComponentsModule',
      canActivate: [AuthGuard],
      data: { permissions: ['full'] }
    }, {
      path: 'ecommerce',
      loadChildren: './ecommerce/ecommerce.module#EcommerceModule',
      canActivate: [AuthGuard],
      data: { permissions: ['full'] }
    }, {
      path: 'taskboard',
      loadChildren: './taskboard/taskboard.module#TaskboardModule',
      canActivate: [AuthGuard],
      data: { permissions: ['full'] }
    }, {
      path: 'forms',
      loadChildren: './forms/forms.module#FormModule',
      canActivate: [AuthGuard],
      data: { permissions: ['full'] }
    }, {
      path: 'tables',
      loadChildren: './tables/tables.module#TablesModule',
      canActivate: [AuthGuard],
      data: { permissions: ['full'] }
    }, {
      path: 'charts',
      loadChildren: './chartlib/chartlib.module#ChartlibModule',
      canActivate: [AuthGuard],
      data: { permissions: ['full'] }
    }, {
      path: 'maps',
      loadChildren: './maps/maps.module#MapModule',
      canActivate: [AuthGuard],
      data: { permissions: ['full'] }
    }, {
      path: 'dragndrop',
      loadChildren: './dragndrop/dragndrop.module#DragndropModule',
      canActivate: [AuthGuard],
      data: { permissions: ['full'] }
    }, {
      path: 'pages',
      loadChildren: './pages/pages.module#PagesModule',
      canActivate: [AuthGuard],
      data: { permissions: ['full'] }
    },
    {
      path: 'setting',
      loadChildren: './setting/setting.module#SettingModule',
      data: { breadcrumb: 'Setting', permissions: ['full'] },
      canActivate: [AuthGuard]
    },
    {
      path: 'company',
      loadChildren: './company/company.module#CompanyModule',
      data: { breadcrumb: 'Company', permissions: ['full'] },
      canActivate: [AuthGuard]
    }
  ]
}, {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'session',
      loadChildren: './session/session.module#SessionModule'
    }]
  },

  {
    path: '**',
    redirectTo: 'session/404'
  }
];
