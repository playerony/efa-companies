import { Spin, Empty } from 'antd';
import { useState, useEffect, Children } from 'react';

import { List, Label } from '@ui/parts';
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

  return (
    <Spin spinning={loading}>
      {noData ? (
        <Empty style={{ paddingTop: 10 }} />
      ) : (
        <>
          <Label>Search Results</Label>
          <List>
            {Children.toArray(
              companiesList.map((_companyDetails) => (
                <CompaniesListRecord company={_companyDetails} addToPortfolio={addToPortfolio} />
              )),
            )}
          </List>
        </>
      )}
    </Spin>
  );
};
