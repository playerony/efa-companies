import { List } from 'antd';
import { border } from 'polished';
import styled from 'styled-components';

const StyledList = styled(List)`
  &&& {
    color: ${({ theme }) => theme.color.black};
    border-radius: ${({ theme }) => theme.radius.default};
    ${({ theme }) => border('2px', 'solid', theme.color.black)}
  }
`;

const S = {
  StyledList,
};

export default S;
