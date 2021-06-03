import { useState, useEffect, Children } from 'react';

import { List, Label } from '@ui';
import { CompaniesListRecord } from '..';

import { Company } from '../../../types/Company';
import { CompaniesListProps } from './companies-list.type';

export const CompaniesList = ({
  loading,
  companies,
  addToPortfolio,
}: CompaniesListProps): JSX.Element => {
  const [companiesList, setCompaniesList] = useState<Company[]>([]);

  useEffect(() => {
    if (companies != null) {
      setCompaniesList(companies);
    }
  }, [JSON.stringify(companies)]);

  const noData = !companiesList?.length;

  if (noData) {
    return <Label>no data</Label>;
  }

  return (
    <>
      <Label>Search Results</Label>
      <List loading={loading}>
        {Children.toArray(
          companiesList.map((_companyDetails) => (
            <CompaniesListRecord company={_companyDetails} addToPortfolio={addToPortfolio} />
          )),
        )}
      </List>
    </>
  );
};
