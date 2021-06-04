import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import * as Pages from '../pages';

export interface RouteConfig {
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
  exact?: boolean;
}

export enum Routes {
  DASHBOARD = '/',
  DETAILS = '/:symbol',
  ANY = '*',
}

export const AppRouteConfig: Record<Routes, RouteConfig> = {
  [Routes.DASHBOARD]: {
    component: Pages.DashboardPage,
  },
  [Routes.DETAILS]: {
    component: Pages.DetailsPage,
  },
  [Routes.ANY]: {
    component: Pages.DashboardPage,
  },
};
