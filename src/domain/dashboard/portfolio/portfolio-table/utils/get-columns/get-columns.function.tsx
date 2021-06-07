import { MouseEvent } from 'react';
import { TableColumnProps } from 'antd';

import { Label } from '@ui/parts';

import { Attributes } from './get-columns.types';
import { Company } from '../../../../types/Company';

const baseColumnsDefinitions = [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Company Name',
  },
  {
    key: 'symbol',
    title: 'Symbol',
    dataIndex: 'symbol',
  },
];

export const getColumns = ({ onRemove }: Attributes): TableColumnProps<Company>[] => {
  const handleRemoveClick = (record: Company) => (event: MouseEvent) => {
    event.stopPropagation();

    onRemove(record.symbol);
  };

  return [
    ...baseColumnsDefinitions,
    {
      title: 'Actions',
      render: (_, record: Company) => (
        <Label strong onClick={handleRemoveClick(record)} style={{ cursor: 'pointer' }}>
          Remove
        </Label>
      ),
    },
  ];
};
