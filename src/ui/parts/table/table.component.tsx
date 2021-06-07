import S from './table.styles';
import { TableProps } from './table.types';

export const Table = (props: TableProps): JSX.Element => (
  <S.StyledTable pagination={false} bordered={false} {...props} />
);
