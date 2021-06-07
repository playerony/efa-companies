import S from './search-input.styles';
import { SearchInputProps } from './search-input.types';

import { SearchOutlined } from '@ant-design/icons';

export const SearchInput = ({ children, ...restProps }: SearchInputProps): JSX.Element => (
  <S.StyledSearchInput prefix={<SearchOutlined />} {...restProps}>
    {children}
  </S.StyledSearchInput>
);
