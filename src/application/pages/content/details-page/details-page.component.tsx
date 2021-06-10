import { useParams } from 'react-router-dom';

import { LocationParamsProps } from './details-page.types';
import { Details } from '@domain/details/details.component';

export const DetailsPage = (): JSX.Element => {
  const { symbol } = useParams<LocationParamsProps>();

  return <Details symbol={symbol} />;
};
