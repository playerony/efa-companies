import { Children, ReactNode } from 'react';

import { Output } from './key-for-each-element.types';

export const keyForEachElement = (children: ReactNode | ReactNode[]): Output =>
  Children.toArray(children);
