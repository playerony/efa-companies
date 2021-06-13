import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';

import { ListItem } from '@ui';
import { respondTo } from '@infrastructure';

const StyledAddIcon = styled(PlusOutlined)`
  cursor: pointer;
  transform: scale(1);
  transition: color 200ms ease-in-out;

  :hover {
    color: ${({ theme }) => theme.color.black}55;
  }
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};

  ${({ theme }) => respondTo.mobile`
    padding: ${theme.spacing.xsmall};
    font-size: ${theme.fontSize.xsmall};
  `}
`;

const S = {
  StyledAddIcon,
  StyledListItem,
};

export default S;
