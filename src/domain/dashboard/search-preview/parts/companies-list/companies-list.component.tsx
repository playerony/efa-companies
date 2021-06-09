import { useState, useEffect } from 'react';

import { CompaniesListRecord } from '..';
import { keyForEachElement } from '@utils/functions';
import { List, Empty, Label, LoadingIndicator } from '@ui/parts';

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

  return (
    <LoadingIndicator spinning={loading}>
      {noData ? (
        <Empty style={{ paddingTop: 10 }} />
      ) : (
        <>
          <Label>Search Results</Label>
          <List>
            {keyForEachElement(
              companiesList.map((_companyDetails) => (
                <CompaniesListRecord company={_companyDetails} addToPortfolio={addToPortfolio} />
              )),
            )}
          </List>
        </>
      )}
    </LoadingIndicator>
  );
};
