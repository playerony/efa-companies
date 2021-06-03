import S from './companies-list-record.style';
import { CompaniesListRecordProps } from './companies-list-record.type';

export const CompaniesListRecord = ({
  company,
  addToPortfolio,
}: CompaniesListRecordProps): JSX.Element => {
  const label = `${company.symbol} - ${company.name}`;

  const onClick = (): void => addToPortfolio(company);

  return (
    <S.StyledListItem>
      {label}
      <S.StyledAddIcon onClick={onClick} />
    </S.StyledListItem>
  );
};
