import { ReactNode } from 'react';

export type Output = Array<Exclude<ReactNode, boolean | null | undefined>>;
