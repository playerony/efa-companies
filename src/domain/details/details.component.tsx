import { useHistory } from 'react-router-dom';

import { Loader } from './parts';
import { ContainerLayout } from './layout';
import { Text, Label, Empty, Button, BigHeading, PaddingContainerLayout } from '@ui';

import { useDetails } from './hooks';
import { numberFormatter } from './utils';

import S from './details.styles';
import { CompanyDetails } from './types';
import { DetailsProps } from './details.type';

export const Details = ({ symbol }: DetailsProps): JSX.Element => {
  const history = useHistory();

  const { results, isLoading } = useDetails<CompanyDetails>(symbol);

  if (isLoading) {
    return <Loader />;
  }

  const handleBackClick = (): void => history.goBack();

  const noData = !results?.Name;

  return (
    <PaddingContainerLayout data-test-id="company-details">
      <ContainerLayout>
        <Button onClick={handleBackClick}>Go Back</Button>
        {noData ? (
          <Empty />
        ) : (
          <>
            <S.StyledTextWrapper>
              <BigHeading>{results?.Name}</BigHeading>
              <Label data-test-id="address">
                <Label strong sameLine>
                  Address:{' '}
                </Label>
                {results?.Address}
              </Label>
              <Label data-test-id="market-capitalization">
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
