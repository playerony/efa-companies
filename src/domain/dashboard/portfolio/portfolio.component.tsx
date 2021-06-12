import { PaddingContainerLayout } from '@ui';
import { PortfolioTable } from './portfolio-table/portfolio-table.component';

import { PortfolioProps } from './portfolio.types';

export const Portfolio = (props: PortfolioProps): JSX.Element => (
  <PaddingContainerLayout>
    <PortfolioTable {...props} />
  </PaddingContainerLayout>
);
