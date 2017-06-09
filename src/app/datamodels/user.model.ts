import {AddressModel} from './address.model';
import {CompanyModel} from './company.model';
export class UserModel {
  name: string;
  username: string;
  email: string;
  address: AddressModel;
  phone: string;
  website: string;
  compnay: CompanyModel;
  avatar: string;
}
