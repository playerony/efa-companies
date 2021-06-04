import { useHistory } from 'react-router-dom';

import { Text, Label, Button, BigHeading } from '@ui';
import { ContainerLayout } from './layout';

import { useDetails } from './hooks';

import { DetailsProps } from './details.type';
import { CompanyDetails } from './types/CompanyDetails';

export const Details = ({ symbol }: DetailsProps): JSX.Element => {
  const history = useHistory();

  const { results, isLoading } = useDetails<CompanyDetails>(symbol);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  const handleBackClick = (): void => history.goBack();

  const nFormatter = (num: number, digits: number) => {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'thousands' },
      { value: 1e6, symbol: 'million' },
      { value: 1e9, symbol: 'billion' },
      { value: 1e12, symbol: 'trillion' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup
      .slice()
      .reverse()
      .find((_item) => num >= _item.value);

    if (!item) {
      return num;
    }

    return `${(num / item.value).toFixed(digits).replace(rx, '$1')} ${item.symbol}`;
  };

  return (
    <ContainerLayout>
      <Button onClick={handleBackClick}>Go Back</Button>
      <div>
        <BigHeading>{results?.Name}</BigHeading>
        <Label>
          <Label strong>Address: </Label>
          {results?.Address}
        </Label>
        <Label>
          <Label strong>Market Capitalization: </Label>
          {nFormatter(Number(results?.MarketCapitalization), 2)}
        </Label>
      </div>
      <Text>{results?.Description}</Text>
    </ContainerLayout>
  );
};
