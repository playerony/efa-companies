import { Company } from '../../types/Company';

export interface PortfolioTableProps {
  companies: Company[];
  onRemove: (symbol: string) => void;
}
