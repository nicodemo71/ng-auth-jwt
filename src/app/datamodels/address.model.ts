import {GetoModel} from './geo.model';
/**
 * Created by NICOLA on 09/06/2017.
 */
export interface AddressModel extends GetoModel {
  street: string;
  suite: string;
  city: string;
  geo: GetoModel;
}
