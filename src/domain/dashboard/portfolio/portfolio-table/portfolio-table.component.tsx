import { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Table, Label } from '@ui';

import { Company } from '@domain/dashboard/types/Company';
import { PortfolioTableProps } from './portfolio-table.types';

import { getColumns } from './utils';

export const PortfolioTable = ({ onRemove, companies }: PortfolioTableProps): JSX.Element => {
  const history = useHistory();

  const onRowClick = (record: Company) => (event: MouseEvent) => {
    event.preventDefault();

    history.push(`/${record.symbol}`);
  };

  const onRow = (record: Company) => ({
    onClick: onRowClick(record),
  });

  const columns = getColumns({ onRemove });

  return (
    <>
      <Label>Your portfolio</Label>
      <Table onRow={onRow} columns={columns} dataSource={companies} />
    </>
  );
};

export default PortfolioTable;
