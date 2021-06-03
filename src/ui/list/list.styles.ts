import { List } from 'antd';
import styled from 'styled-components';

const StyledList = styled(List)`
  &&& {
    color: ${({ theme }) => theme.color.black};
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: ${({ theme }) => theme.radius.default};
  }
`;

const S = {
  StyledList,
};

export default S;
