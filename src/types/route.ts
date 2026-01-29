import { PATH } from '@/constants/paths';
import type { JSX } from 'react';

type RouteKeys = keyof typeof PATH;
type RouteValues = (typeof PATH)[RouteKeys];

export type TRoute = {
  name?: string;
  path: RouteValues;
  component: () => JSX.Element;
  exact?: boolean;
};
