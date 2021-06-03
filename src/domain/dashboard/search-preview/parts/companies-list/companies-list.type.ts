import { Company } from '../../../types/Company';

export interface CompaniesListProps {
  loading: boolean;
  companies: Company[] | null;
  addToPortfolio: (company: Company) => void;
}
