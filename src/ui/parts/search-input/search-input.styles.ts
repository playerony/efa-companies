import { Input } from 'antd';
import styled from 'styled-components';

const StyledSearchInput = styled(Input)`
  &&& {
    box-shadow: none;
    border-color: ${({ theme }) => theme.color.black};
    border-radius: ${({ theme }) => theme.radius.large};

    :hover {
      border-color: ${({ theme }) => theme.color.black}55;
    }
  }
`;

const S = {
  StyledSearchInput,
};

export default S;
