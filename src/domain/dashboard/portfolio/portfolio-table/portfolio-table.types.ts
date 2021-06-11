import { Company } from '../../types';

export interface PortfolioTableProps {
  companies: Company[];
  onRemove: (symbol: string) => void;
}
