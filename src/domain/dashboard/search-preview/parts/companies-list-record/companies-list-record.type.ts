import { Company } from '@domain/dashboard';

export interface CompaniesListRecordProps {
  company: Company;
  addToPortfolio: (company: Company) => void;
}
