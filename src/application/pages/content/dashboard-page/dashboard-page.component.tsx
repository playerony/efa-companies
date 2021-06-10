import { FlexContainerLayout } from './layout';
import { Company, Portfolio, SearchPreview } from '@domain/dashboard';
import { useLocalStorage } from '@utils/hooks';

export const DashboardPage = (): JSX.Element => {
  const [portfolio, setPortfolio] = useLocalStorage<Company[]>('portfolio', []);

  const handleRemove = (symbol: string): void => {
    const copiedPortfolio = portfolio.slice();
    const filteredArray = copiedPortfolio.filter(
      (_portfolioItem) => _portfolioItem.symbol !== symbol,
    );

    setPortfolio(filteredArray);
  };

  const handleAdd = (company: Company): void => {
    if (!portfolio.find((_portfolioItem) => _portfolioItem.symbol === company.symbol)) {
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
