import { useLocalStorage } from '@utils';
import { FlexContainerLayout } from './layout';
import { Company, Portfolio, SearchPreview } from '@domain/dashboard';

export const DashboardPage = (): JSX.Element => {
  const [portfolio, setPortfolio] = useLocalStorage<Company[]>('portfolio', []);

  const handleRemove = (symbol: string): void => {
    const copiedPortfolio = portfolio.slice();

    const portfolioWithoutRecord = copiedPortfolio.filter(
      (_portfolioItem) => _portfolioItem.symbol !== symbol,
    );

    setPortfolio(portfolioWithoutRecord);
  };

  const handleAdd = (company: Company): void => {
    console.log(portfolio);

    const hasPortfolioRecord = portfolio?.find(
      (_portfolioItem) => _portfolioItem.symbol === company.symbol,
    );

    if (!hasPortfolioRecord) {
      setPortfolio([...portfolio, company]);
    }
  };

  return (
    <FlexContainerLayout>
      <SearchPreview addToPortfolio={handleAdd} />
      <Portfolio companies={portfolio} onRemove={handleRemove} />
    </FlexContainerLayout>
  );
};
