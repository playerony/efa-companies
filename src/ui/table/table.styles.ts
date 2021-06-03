import { Table } from 'antd';
import styled from 'styled-components';

const StyledTable = styled(Table)`
  &&& {
    color: ${({ theme }) => theme.color.black};
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: ${({ theme }) => theme.radius.default};

    thead tr th {
      color: ${({ theme }) => theme.color.gray};
      border-color: ${({ theme }) => theme.color.black};
      background-color: ${({ theme }) => theme.color.black}55;
    }
  }
`;

const S = {
  StyledTable,
};

export default S;
