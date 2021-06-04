import { useHistory } from 'react-router-dom';

import { Table, Label } from '@ui';

import { getColumns } from './utils';
import { PortfolioTableProps } from './portfolio-table.types';

export const PortfolioTable = ({ onRemove, companies }: PortfolioTableProps): JSX.Element => {
  const history = useHistory();

  return (
    <>
      <Label>Your portfolio</Label>
      <Table
        dataSource={companies}
        columns={getColumns({ onRemove })}
        onRow={(record) => ({
          onClick: (event) => {
            event.preventDefault();

            history.push(`/${record.symbol}`);
          },
        })}
      />
    </>
  );
};

export default PortfolioTable;
