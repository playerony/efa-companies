import { MouseEvent } from 'react';
import { TableColumnProps } from 'antd';

import { Label } from '@ui';

import { Company } from '../../../../types';
import { Attributes } from './get-columns.types';

const baseColumnsDefinitions = [
  {
    dataIndex: 'name',
    title: 'Company Name',
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
  },
];

export const getColumns = ({ onRemove }: Attributes): TableColumnProps<Company>[] => {
  const handleRemoveClick = (record: Company) => (event: MouseEvent) => {
    event.stopPropagation();

    onRemove(record.symbol);
  };

  const actionsColumnRender = (_: unknown, record: Company) => (
    <Label strong pointer onClick={handleRemoveClick(record)}>
      Remove
    </Label>
  );

  return [
    ...baseColumnsDefinitions,
    {
      title: 'Actions',
      render: actionsColumnRender,
    },
  ];
};
