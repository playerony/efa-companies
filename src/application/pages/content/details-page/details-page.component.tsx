import { useParams } from 'react-router-dom';

import { Details } from '@domain/details';
import { LocationParamsProps } from './details-page.types';

export const DetailsPage = (): JSX.Element => {
  const { symbol } = useParams<LocationParamsProps>();

  return <Details symbol={symbol} />;
};
