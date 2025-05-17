export default {
  customerSignUp: 'app/api/v1/customer/signup',
  PreSignedURLGET: 'empty',
  register: '',
  staticContent: 'user-service/reel/api/v1/user/static-content?',
  contactUs: 'user-service/reel/api/v1/user/contact-info',
  faq: 'user-service/reel/api/v1/user/faqs',
  //Home Page
  bannerList: 'shop-service/reel/api/v1/app/banner',
  user: {
    logout: 'empty',
    deleteAccount: 'empty',
  },
  directionApi: 'https://maps.googleapis.com/maps/api/directions/json',
  settings:{
    notificationsSetting: 'app/api/v1/customer/update-notification-setting',
    contactUs: `app/api/v1/common/contact-us`,
    downloadContent:`app/api/v1/download_content/get-download-content-list`,
    slabList: `app/api/v1/cms/get-cms-list`,
    locateDealer:`app/api/v1/dealer/locate-dealer`
  },
  more:{
    updateProfileCustomer: 'app/api/v1/customer/update-profile',
    updateProfileDealer: 'app/api/v1/dealer/update-profile',
    updateProfileRetailer: 'app/api/v1/retailer/update-profile',
    updateProfileEmployee: 'app/api/v1/employee/update-profile',
    logout: 'app/api/v1/customer/logout'
  },
  product:{
    productListByType: '/product/api/v1/product/get-product-list-by-type',
    productListByCategory: `app/api/v1/product/get-products-by-category`,
    productDetailes: `/app/api/v1/product/get-product`,
  },
  home:{
    homeTrendingProductList: 'app/api/v1/product/get-home-trending-product-list',
    homeProductType: 'app/api/v1/product/get-home-product-type',
    seeMoreProducts: 'app/api/v1/product/get-more-product-list'
  },
  commonBanner:{
    bannerList: 'app/api/v1/banner/get-banner-list'
  },
  commonMediaUpload:{
    mediaUpload: 'customer/api/v1/common/upload-media'
  },
  favorite:{
    addToFavorite: 'app/api/v1/product/add-to-favorite'
  },
  authUser:{
    loginCustomer: 'app/api/v1/customer/login',
    loginDealer: 'app/api/v1/dealer/login',
    loginRetailer: 'app/api/v1/retailer/login',
    loginEmployee: 'app/api/v1/employee/login',
    verifyOtpCustomer: `app/api/v1/customer/verify-otp`,
    verifyOtpDealer: `app/api/v1/dealer/verify-otp`,
    verifyOtpRetailer: `app/api/v1/retailer/verify-otp`,
    verifyOtpEmployee: `app/api/v1/employee/verify-otp`,
    verifyEmailOtpCustomer: `app/api/v1/customer/verify-email-otp`,
    verifyEmailOtpDealer: `app/api/v1/dealer/verify-email-otp`,
    verifyEmailOtpRetailer: `app/api/v1/retailer/verify-email-otp`,
    verifyEmailOtpEmployee: `app/api/v1/employee/verify-email-otp`,
    sendEmailOtpCustomer: `app/api/v1/customer/send-email-otp`,
    sendEmailOtpDealer: `app/api/v1/dealer/send-email-otp`,
    sendEmailOtpRetailer: `app/api/v1/retailer/send-email-otp`,
    sendEmailOtpEmployee: `app/api/v1/employee/send-email-otp`,
  },
  logoutUser:{
    logOutCustomer: `app/api/v1/customer/logout`,
    logOutDealer: `app/api/v1/dealer/logout`,
    logOutRetailer: `app/api/v1/retailer/logout`,
    logOutEmployee: `app/api/v1/employee/logout`,
  },
  getProfileDetail:{
    getDealerProfile: `app/api/v1/dealer/get-dealer`,
    getCustomerProfile: `app/api/v1/customer/get-customer`,
    getRetailerProfile: `app/api/v1/retailer/get-retailer`,
    getEmployeeProfile: `app/api/v1/employee/get-employee`,
  },
  retailer:{
    addRetailer:`app/api/v1/dealer/add-retailer`
  },
  training:{
    trainingList:`app/api/v1/training/get-training-list`
  },
  promotion:{
    promotionList:`/app/api/v1/promotion/get-multiple-promotion-list`,
    promotionSeeMore:`app/api/v1/promotion/get-promotion-list`
  }
  

};
