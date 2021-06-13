import { Company } from '@domain/dashboard';

export interface PortfolioTableProps {
  companies: Company[];
  onRemove: (symbol: string) => void;
}
