import styled from 'styled-components';

import { respondTo } from '@infrastructure';

const StyledContent = styled.div`
  height: 400px;

  ${respondTo.mobile`
    height: 200px;
  `}

  ${respondTo.xmobile`
    height: 100px;
  `}
`;

const S = {
  StyledContent,
};

export default S;
