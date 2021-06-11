import { CompaniesListRecord } from '..';
import { List, LoadingIndicator } from '@ui/parts';

import S from './companies-list.styles';
import { CompaniesListProps } from './companies-list.type';

import { keyForEachElement } from '@utils/functions';

export const CompaniesList = ({
  loading,
  companies,
  addToPortfolio,
}: CompaniesListProps): JSX.Element => {
  const noData = !companies?.length;

  if (noData) {
    return (
      <LoadingIndicator spinning={loading}>
        <S.StyledEmpty />
      </LoadingIndicator>
    );
  }

  return (
    <>
      <S.StyledLabel>Search Results</S.StyledLabel>
      <LoadingIndicator spinning={loading}>
        <List>
          {keyForEachElement(
            companies?.map((_companyDetails) => (
              <CompaniesListRecord company={_companyDetails} addToPortfolio={addToPortfolio} />
            )),
          )}
        </List>
      </LoadingIndicator>
    </>
  );
};
