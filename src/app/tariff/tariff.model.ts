import { Option } from "../option/option.model";

export interface Tariff {
  tariff_name: string;
  tariff_price: number;
  connectedOptions: Option[];

}
