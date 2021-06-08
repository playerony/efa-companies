import { Empty } from 'antd';
import { useHistory } from 'react-router-dom';

import { ContainerLayout } from './layout';
import { PaddingContainerLayout } from '@ui/layout';
import { Text, Label, Button, BigHeading } from '@ui/parts';

import { useDetails } from './hooks';
import { numberFormatter } from './utils';

import S from './details.styles';
import { DetailsProps } from './details.type';
import { CompanyDetails } from './types/CompanyDetails';

export const Details = ({ symbol }: DetailsProps): JSX.Element => {
  const history = useHistory();

  const { results, isLoading } = useDetails<CompanyDetails>(symbol);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  const handleBackClick = (): void => history.goBack();

  const noData = !results?.Name;

  return (
    <PaddingContainerLayout>
      <ContainerLayout>
        <Button onClick={handleBackClick}>Go Back</Button>
        {noData ? (
          <Empty />
        ) : (
          <>
            <S.StyledTextWrapper>
              <BigHeading>{results?.Name}</BigHeading>
              <Label>
                <Label strong sameLine>
                  Address:{' '}
                </Label>
                {results?.Address}
              </Label>
              <Label>
                <Label strong sameLine>
                  Market Capitalization:{' '}
                </Label>
                {numberFormatter(Number(results?.MarketCapitalization), 2)}
              </Label>
            </S.StyledTextWrapper>
            <Text>{results?.Description}</Text>
          </>
        )}
      </ContainerLayout>
    </PaddingContainerLayout>
  );
};
