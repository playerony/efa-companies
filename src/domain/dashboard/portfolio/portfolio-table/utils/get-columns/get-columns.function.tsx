import { TableColumnProps } from 'antd';

import { Label } from '@ui';

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
  const handleRemoveClick = (record: Company) => () => onRemove(record.symbol);

  return [
    ...baseColumnsDefinitions,
    {
      title: 'Actions',
      render: (_, record: Company) => <Label onClick={handleRemoveClick(record)}>Remove</Label>,
    },
  ];
};
