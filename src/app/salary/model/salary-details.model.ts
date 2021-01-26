import { TaxTypeEnum } from '@app/salary/model/taxType.enum';

export interface SalaryDetailsModel {
  taxName: TaxTypeEnum;
  amount: number;
}
