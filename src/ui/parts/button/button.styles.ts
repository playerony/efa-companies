import { Button } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  &&& {
    color: ${({ theme }) => theme.color.black};
    border-color: ${({ theme }) => theme.color.black};
    border-radius: ${({ theme }) => theme.radius.default};

    &:hover {
      color: ${({ theme }) => theme.color.black}55;
      border-color: ${({ theme }) => theme.color.black}55;
    }
  }
`;

const S = {
  StyledButton,
};

export default S;
