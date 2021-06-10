import { useState, FormEvent } from 'react';
import { Redirect } from 'react-router-dom';

import { PaddingContainerLayout } from '@ui/layout';
import { SearchInput, CompaniesList } from './parts';

import { SearchPreviewProps } from './search-preview.types';

import { useCompanies } from './hooks';
import { useDebounce } from '@utils/hooks';

export const SearchPreview = ({ addToPortfolio }: SearchPreviewProps): JSX.Element => {
  const [companyName, setCompanyName] = useState('');
  const debouncedCompanyName = useDebounce(companyName, 500);

  const { results: companies, hasError, isLoading } = useCompanies(debouncedCompanyName);

  if (hasError) {
    return <Redirect to="/404" />;
  }

  const onInputChange = (event: FormEvent<HTMLInputElement>): void =>
    setCompanyName(event.currentTarget.value);

  return (
    <PaddingContainerLayout>
      <SearchInput onChange={onInputChange} />
      <CompaniesList loading={isLoading} companies={companies} addToPortfolio={addToPortfolio} />
    </PaddingContainerLayout>
  );
};
