import { useHistory } from 'react-router-dom';

import S from './nav.styles';
import { BigHeading } from '@ui/parts';

export const NavBar = (): JSX.Element => {
  const history = useHistory();

  const redirectToHomePage = (): void => history.push('/');

  return (
    <S.StyledNav>
      <BigHeading onClick={redirectToHomePage}>efa companies</BigHeading>
    </S.StyledNav>
  );
};
