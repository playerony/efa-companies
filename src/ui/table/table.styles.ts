import { Table } from 'antd';
import styled from 'styled-components';

import { respondTo } from '@infrastructure/styles/mixins';

const StyledTable = styled(Table)`
  &&& {
    color: ${({ theme }) => theme.color.black};
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: ${({ theme }) => theme.radius.default};

    thead tr th {
      color: ${({ theme }) => theme.color.gray};
      border-color: ${({ theme }) => theme.color.black};
      background-color: ${({ theme }) => theme.color.black}55;

      ${({ theme }) => respondTo.mobile`
        padding: ${theme.spacing.small};
      `}
    }

    tbody tr td {
      ${({ theme }) => respondTo.mobile`
        line-height: 1.2;
        padding: ${theme.spacing.small};
      `}
    }
  }
`;

const S = {
  StyledTable,
};

export default S;
