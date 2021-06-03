import { Company } from '../types/Company';

export interface PortfolioProps {
  companies: Company[];
  onRemove: (symbol: string) => void;
}
