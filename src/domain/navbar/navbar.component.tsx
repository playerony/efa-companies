import { useHistory } from 'react-router-dom';

import S from './navbar.styles';
import { BigHeading } from '@ui/parts';

export const Navbar = (): JSX.Element => {
  const history = useHistory();

  const redirectToHomePage = (): void => history.push('/');

  return (
    <S.StyledNavbar>
      <BigHeading pointer onClick={redirectToHomePage}>
        efa companies
      </BigHeading>
    </S.StyledNavbar>
  );
};
