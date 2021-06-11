import { Company } from '../../../types';

export interface CompaniesListProps {
  loading: boolean;
  companies: Company[] | null;
  addToPortfolio: (company: Company) => void;
}
