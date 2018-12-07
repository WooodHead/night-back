import { Routes } from 'nest-router';

import { UserModule } from './modules/user/user.module';
import { RolesModule } from './modules/roles/roles.module';
import { AuthController } from './modules/core/auth/auth.controller';
import { JournalModule } from './modules/journal/journal.module';
import { StocksModule } from './modules/stocks/stocks.module';
import { ActionModule } from './modules/action/action.module';
// needle-module-import

export const appRoutes: Routes = [
  {
    path: '/users',
    module: UserModule,
  },
  {
    path: '/roles',
    module: RolesModule,
  },
  {
    path: '/auth',
    module: AuthController,
  },
  {
    path: '/journals',
    module: JournalModule,
  },
  {
    path: '/stocks',
    module: StocksModule,
  },
  {
    path: '/actions',
    module: ActionModule,
  },
  // needle-modules-routes
];
