import { Company } from '../../../types/Company';

export interface CompaniesListRecordProps {
  company: Company;
  addToPortfolio: (company: Company) => void;
}
