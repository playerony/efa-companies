import { Company } from '../../../types';

export interface CompaniesListRecordProps {
  company: Company;
  addToPortfolio: (company: Company) => void;
}
