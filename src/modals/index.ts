import { screenNames } from '../utils';
import { IMAGES } from '../styles';

class BannerDetails {
  _id: string = '';
  bannerImage: string = '';
  bannerTitle: string = '';
  description: string = '';
  logoImage: string = '';
}

class ReducerModal {
  // authReducer: any;
}

enum API_STATUS {
  SUCCESS = 200,
  CREATED = 201,
  PUT_SUCCESS = 202,
  PATCH_SUCCESS = 200,
  ERROR = 400,
}

enum PRODUCT_TYPES {
  RENTAL = 'RENTAL',
  VENDOR = 'VENDOR',
  SERVICE = 'SERVICE',
  PACKAGE = 'PACKAGE',
  VENDOR_PRODUCT = 'VENDOR_PRODUCT',
  VENDOR_SERVICES = 'VENDOR_SERVICE',
  PRODUCT = 'PRODUCT',
  PURCHASE = 'PURCHASE',
  PURCHASE_AND_RENTAL = 'RENTAL_AND_PURCHASE',
}


export {
  BannerDetails,
  ReducerModal,
  API_STATUS,
  PRODUCT_TYPES,
};

