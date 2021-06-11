import { Company } from '../types';

export interface PortfolioProps {
  companies: Company[];
  onRemove: (symbol: string) => void;
}
