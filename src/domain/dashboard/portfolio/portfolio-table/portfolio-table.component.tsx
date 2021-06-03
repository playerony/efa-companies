import { Table, Label } from '@ui';

import { getColumns } from './utils';
import { PortfolioTableProps } from './portfolio-table.types';

export const PortfolioTable = ({ onRemove, companies }: PortfolioTableProps): JSX.Element => (
  <>
    <Label>Your portfolio</Label>
    <Table dataSource={companies} columns={getColumns({ onRemove })} />
  </>
);

export default PortfolioTable;
