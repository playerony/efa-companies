import { ContainerLayout } from './layout';
import { PortfolioTable } from './portfolio-table/portfolio-table.component';

import { PortfolioProps } from './portfolio.types';

export const Portfolio = (props: PortfolioProps): JSX.Element => (
  <ContainerLayout>
    <PortfolioTable {...props} />
  </ContainerLayout>
);
