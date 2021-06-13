import { Company } from '@domain/dashboard';

export interface CompaniesListProps {
  loading: boolean;
  companies: Company[] | null;
  addToPortfolio: (company: Company) => void;
}
