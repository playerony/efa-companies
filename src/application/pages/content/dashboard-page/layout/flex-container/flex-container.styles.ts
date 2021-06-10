import styled from 'styled-components';

import { respondTo } from '@infrastructure/styles/mixins';

const StyledFlexContainer = styled.div`
  flex: 1 1;
  flex-grow: 0;
  display: flex;
  flex-shrink: 0;

  ${respondTo.small`
    flex-direction: column;
  `}
`;

const S = {
  StyledFlexContainer,
};

export default S;
