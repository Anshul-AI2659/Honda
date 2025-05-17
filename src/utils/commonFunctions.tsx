import {
  Platform,
  LayoutAnimation,
  UIManager,
  Linking,
  Alert,
  PermissionsAndroid
} from 'react-native';
import RNFS from 'react-native-fs';
import Permissions, {
  check,
  request,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import moment from 'moment';
// import {CommonFunctions, END_POINTS} from '_utils';
import { SERVICE_URLS } from '../services';
import { END_POINTS, CommonFunctions } from '.';
import RNFetchBlob from 'react-native-blob-util';


import FileViewer from 'react-native-file-viewer';
import { Images } from '../assets';
import colors from './colors';
import CustomSnackBar from '../components/customSnackBar';

const _linearAnimation = () => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext({
    duration: 300,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  });

  // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};

function getFileType(url: string) {
  let newUrl = url?.toLowerCase();
  // List of common video, image, and document file extensions
  const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.mkv'];
  const imageExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.bmp',
    '.webp',
    '.heic',
  ];
  const documentExtensions = [
    '.pdf',
    '.doc',
    '.docx',
    '.ppt',
    '.pptx',
    '.xls',
    '.xlsx',
    '.txt',
  ];

  // Get the file extension from the URL
  let ext = newUrl?.substring(newUrl?.lastIndexOf('.'));

  // Convert to lowercase for case-insensitive comparison
  ext = ext?.toLowerCase();

  // Check if the extension is in the video, image, or document extensions lists
  if (videoExtensions?.includes(ext)) {
    return 'video';
  } else if (imageExtensions.includes(ext)) {
    return 'image';
  } else if (documentExtensions.includes(ext)) {
    return 'document';
  } else {
    return 'unknown';
  }
}

const _fadeInAnimation = () => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext({
    duration: 300,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  });
  // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
};

const isIos = () => {
  return Platform.OS == 'ios';
};

const _getLocationFromLatLong = (lat: number, lng: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${SERVICE_URLS.GOOGLE_API_KEY}`,
    )
      .then(response => response.json())
      .then(responseJson => {
        if (
          responseJson.status === 'OK' &&
          responseJson.results &&
          responseJson.results.length > 0
        ) {
          const formattedAddress = responseJson.results[0].formatted_address;
          const addressComponents = formattedAddress.split(',');
          resolve(formattedAddress.trim());
        } else {
          reject('Invalid response or no results found.');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        reject('Error fetching data');
      });
  });
};

const _getLocationFromZipCode = (zipCode: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${SERVICE_URLS.GOOGLE_API_KEY}`,
    )
      .then(response => response.json())
      .then(responseJson => {
        if (
          responseJson.status === 'OK' &&
          responseJson.results &&
          responseJson.results.length > 0
        ) {
          const result = responseJson.results[0];
          const addressComponents = result.address_components;
          let city = result?.formatted_address;
          let state = result?.address_components?.[1]?.long_name ?? '';
          let country = '';
          let locality = false;
          let neighborhood = false;
          let administrative3 = false;
          let administrative2 = false;
          for (const component of addressComponents) {
            switch (true) {
              case component.types.includes('locality'):
                city = component.long_name;
                locality = true;
                break;
              case component.types.includes('neighborhood'):
                if (!locality && !neighborhood) {
                  city = component.long_name;
                  neighborhood = true;
                }
                break;
              case component.types.includes('administrative_area_level_3'):
                if (!locality && !neighborhood) {
                  city = component.long_name;
                  administrative3 = true;
                }
                break;
              case component.types.includes('administrative_area_level_2'):
                if (!locality && !neighborhood && !administrative3) {
                  city = component.long_name;
                  administrative2 = true;
                }
                break;
              case component.types.includes('administrative_area_level_1'):
                state = component.long_name;
                break;
              case component.types.includes('country'):
                if (
                  !locality &&
                  !neighborhood &&
                  !administrative3 &&
                  !administrative2
                ) {
                  city = component.long_name;
                }
                country = component.long_name;
                break;
              default:
            }
          }
          let data = {
            city: city ?? result?.formatted_address,
            state: state,
            country: country,
          };
          resolve(data);
        } else {
          reject('Invalid response or no results found.');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        reject('Error fetching data');
      });
  });
};

const requestLocationPermission = async () => {
  try {
    let permissionStatus;
    if (Platform.OS === 'ios') {
      // For iOS, use request method directly
      permissionStatus = await check(
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE || PERMISSIONS.IOS.LOCATION_ALWAYS,
      );
      if (permissionStatus !== RESULTS.GRANTED) {
        permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      }
    } else {
      // For Android, check if permission is already granted or needs to be requested
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('requestLocationPermission', permissionStatus);
      if (permissionStatus !== RESULTS.GRANTED) {
        permissionStatus = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
      }
    }
    return permissionStatus;
  } catch (error) {
    console.error('Error handling location permission:', error);
    return null;
  }
};

const checkLocationPermission = async () => {
 //write your code here
};

const checkAndFetchLocation = (success: Function, fail: Function) => {
 
};

const getLocationLatLng = async (
  success: Function,
  fail: Function,
  checkForPermission?: boolean,
) => {
  //write your logic here 
};

const checkGalleryPermission = async (success: Function, fail: Function) => {
  if (isIos()) {
    const permission = await Permissions.check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    console.log(
      '🚀 ~ file: commonFunctions.tsx:170 ~ checkGalleryPermission ~ permission:',
      permission,
    );
    if (
      permission === Permissions.RESULTS.GRANTED ||
      permission === Permissions.RESULTS.LIMITED
    ) {
      success(true);
      return;
    }
    const res = await Permissions.request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (
      res === Permissions.RESULTS.GRANTED ||
      res === Permissions.RESULTS.LIMITED
    ) {
      success(true);
    }
    if (res === 'blocked') {
      fail({statusCode: 1});
    }
    if (res === 'denied') {
      fail({statusCode: 2});
    }
    if (res === 'unavailable') {
      fail({statusCode: 3});
    }
  } else {
    if (parseInt(Platform.Version as string, 10) >= 33) {
      const permissions = await Permissions.check(
        PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
      );
      if (permissions == 'granted' || permissions == 'limited') {
        success(true);
        return;
      }
      const res = await Permissions.request(
        PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
      );
      if (res == 'granted' || res == 'limited') {
        success(true);
      }
      if (res === 'blocked') {
        fail({statusCode: 1});
      }
      if (res === 'denied') {
        fail({statusCode: 2});
      }
      if (res === 'unavailable') {
        fail({statusCode: 3});
      }
    } else {
      const permission = await Permissions.check(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );
      if (permission === 'granted') {
        success(true);
        return;
      }
      const res = await Permissions.request(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );
      if (res === Permissions.RESULTS.GRANTED) {
        success(true);
      }
      if (res !== 'granted') {
        fail({stateCode: 3});
      }
    }
  }
};
const checkCameraPermission = async (success: Function, fail: Function) => {
  try {
    if (isIos()) {
      const permission = await Permissions.check(PERMISSIONS.IOS.CAMERA);
      if (
        permission === Permissions.RESULTS.GRANTED ||
        permission === Permissions.RESULTS.LIMITED
      ) {
        success(true);
        return;
      }
      const res = await Permissions.request(PERMISSIONS.IOS.CAMERA);
      if (
        res === Permissions.RESULTS.GRANTED ||
        res === Permissions.RESULTS.LIMITED
      ) {
        success(true);
      } else if (res === 'blocked') {
        fail({statusCode: 1});
      } else if (res === 'denied') {
        fail({statusCode: 2});
      } else if (res === 'unavailable') {
        fail({statusCode: 3});
      }
    } else {
      if (parseInt(Platform.Version as string, 10) >= 33) {
        const permissions = await Permissions.check(PERMISSIONS.ANDROID.CAMERA);
        if (permissions === 'granted' || permissions === 'limited') {
          success(true);
          return;
        }
        const res = await Permissions.request(PERMISSIONS.ANDROID.CAMERA);
        if (res === 'granted' || res === 'limited') {
          success(true);
        } else if (res === 'blocked') {
          fail({statusCode: 1});
        } else if (res === 'denied') {
          fail({statusCode: 2});
        } else if (res === 'unavailable') {
          fail({statusCode: 3});
        }
      } else {
        const permission = await Permissions.check(PERMISSIONS.ANDROID.CAMERA);
        if (permission === 'granted') {
          success(true);
          return;
        }
        const res = await Permissions.request(PERMISSIONS.ANDROID.CAMERA);
        if (res === Permissions.RESULTS.GRANTED) {
          success(true);
        } else if (res !== 'granted') {
          fail({stateCode: 3});
        }
      }
    }
  } catch (error) {
    console.error('Error checking camera permission:', error);
    fail({statusCode: 4});
  }
};

const uploadImageToBucket = async (item: any) => {
//write your logic here
};

/**
 * Removes Emojis from a string
 *
 * @param {string} str
 * @returns
 */
const removeEmojis = (str: string) => {
  // Regex pattern to match emojis, but explicitly exclude the rupee symbol (₹)
  const regex =
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{2934}\u{2935}\u{2B06}\u{2194}-\u{21AA}\u{2B06}\u{2934}-\u{2935}]/gu;
  return str.replace(regex, '');
};
/**
 * Removes emojis and whitespaces from a string
 *
 * @param {string} email
 * @returns
 */
const normalizeEmail = (email: string) => {
  return removeEmojis(email).replace(/\s/g, '');
};

/**
 * Removes whitespaces, emojis, numbers and special characters from a string
 *
 * @param {string} name
 * @returns
 */
const normalizeName = (name: string) => {
  return removeEmojis(name).replace(/[^A-Za-z]+/g, '');
};


const createQueryParams = (params: any) => {
  const newObj: any = {};
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      newObj[key] = value;
    }
  }
  return Object.entries(newObj)
    .map(e => e.join('='))
    .join('&');
};
const checkRateModelType = (rateModel: string) => {
  return rateModel === 'HOURLY'
    ? 'Hr'
    : rateModel === 'WEEKLY'
    ? 'Week'
    : rateModel === 'DAILY'
    ? 'Day'
    : 'Mo';
};

const checkServiceRateModelType = (rateModel: string) => {
  return rateModel === 'HOURLY'
    ? 'Hourly Rate'
    : rateModel === 'WEEKLY'
    ? 'Weekly Rate'
    : rateModel === 'DAILY'
    ? 'Daily Rate'
    : 'Monthly Rate';
};

function formatNumber(amount: any, withAbbr: boolean) {
  const abbreviations = ['', 'K', 'M', 'B', 'T'];
  let abbreviationIndex = 0;

  // If amount is less than 10,000, just format with commas and decimals
  if (amount < 10000) {
    return amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  // Keep dividing the amount by 1000 and increase the index for abbreviation
  while (amount >= 1000 && abbreviationIndex < abbreviations.length - 1) {
    amount /= 1000;
    abbreviationIndex++;
  }

  // Format the number to include commas and 2 decimal places
  const formattedAmount = amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (withAbbr) {
    return `${formattedAmount}${abbreviations[abbreviationIndex]}`;
  }
  return `${formattedAmount}`;
  // Append the correct abbreviation (K, M, etc.)
}

function abbreviatePrice(price: number) {
  if (typeof price !== 'number') {
    return 'Invalid input';
  }

  return formatNumber(price, true);

  const abbreviations = ['', 'K', 'M', 'B', 'T'];
  let abbreviationIndex = 0;

  while (price >= 1000 && abbreviationIndex < abbreviations.length - 1) {
    price /= 1000;
    abbreviationIndex++;
  }

  return price.toFixed(2) + abbreviations[abbreviationIndex];
}
function formatFractionalValue(value) {
  // Convert the value to a number if it's a string
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;

  // Check if the conversion was successful and the value is a valid number
  if (isNaN(numericValue)) {
    return 'Invalid number';
  }

  // Convert the number to a string, split at the decimal point
  const [integerPart, decimalPart = ''] = numericValue.toString().split('.');

  // Take only the first two digits of the fractional part without rounding
  const truncatedDecimal = decimalPart.slice(0, 2).padEnd(2, '0');

  // Combine the integer and truncated decimal part
  return `${integerPart}.${truncatedDecimal}`;
}

const getPriceWithCurrency = (amount: any, withoutAbbri?: boolean) => {
  if (withoutAbbri) {
    return '$' + formatFractionalValue(amount);
  }
  return '$' + abbreviatePrice(amount);
};

const getPriceDuration = (
  shiftLength: number,
  rateModel: string = 'HOURLY',
  withoutFor?: boolean,
  spaceing?: boolean,
) => {
  let finalRateModel =
    // shiftLength > 1 ? 'hrs' : 'hr';
    rateModel === 'HOURLY'
      ? shiftLength > 1
        ? 'hrs'
        : 'hr'
      : rateModel === 'WEEKLY'
      ? shiftLength > 1
        ? 'weeks'
        : 'week'
      : rateModel === 'DAILY'
      ? shiftLength > 1
        ? 'days'
        : 'day'
      : shiftLength > 1
      ? 'months'
      : 'month';
  if (withoutFor) {
    return `${shiftLength}${spaceing ? ' ' : ''}${finalRateModel}`;
  }
  return ` for ${shiftLength}${finalRateModel}`;
};

const getPriceDurationDetails = (
  shiftLength: number,
  rateModel: string = 'HOURLY',
  withoutFor?: boolean,
  spaceing?: boolean,
) => {
  let finalRateModel =
    rateModel === 'HOURLY'
      ? shiftLength > 1
        ? 'hrs'
        : 'hr'
      : rateModel === 'WEEKLY'
      ? shiftLength > 1
        ? 'weeks'
        : 'week'
      : rateModel === 'DAILY'
      ? shiftLength > 1
        ? 'days'
        : 'day'
      : shiftLength > 1
      ? 'months'
      : 'month';
  if (withoutFor) {
    return `${shiftLength}${spaceing ? ' ' : ''}${finalRateModel}`;
  }
  return ` for ${shiftLength}${finalRateModel}`;
};

const getDiscountOff = (amount: any, nextLine?: boolean) => {
  return nextLine ? amount + '% \nOFF' : amount + '% OFF';
};

const pressThrottle = (func: Function, delay: number) => {
  //write your logic here 
};

const checkMyPermission = async (
  successCallback: Function,
  errorCallback: Function,
) => {
  try {
    const permissionStatus = await checkLocationPermission();

    if (permissionStatus) {
      if (permissionStatus == RESULTS.UNAVAILABLE) {
        errorCallback({status: RESULTS.UNAVAILABLE});
        return {status: RESULTS.UNAVAILABLE};
      }
      if (permissionStatus == RESULTS.DENIED) {
        const permissionResult = await request(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        );
        if (permissionResult == RESULTS.GRANTED) {
          checkAndFetchLocation(
            (result: any) => {
              successCallback &&
                successCallback({status: RESULTS.GRANTED, ...result});
            },
            (error: any) => {
              errorCallback &&
                errorCallback({status: RESULTS.UNAVAILABLE, ...error});
            },
          );
        } else {
          return {status: RESULTS.BLOCKED};
        }
      }
      if (permissionStatus == RESULTS.GRANTED) {
        checkAndFetchLocation(
          (result: any) => {
            successCallback &&
              successCallback({status: RESULTS.GRANTED, ...result});
          },
          (error: any) => {
            errorCallback && errorCallback({...error});
          },
        );
      } else {
        return {status: permissionStatus};
      }
    } else {
      return {status: RESULTS.UNAVAILABLE};
    }
  } catch (error) {
    return {status: RESULTS.UNAVAILABLE};
  }
};

const checkMyAndroidPermission = async (
  successCallback: Function,
  errorCallback: Function,
) => {
  // write your logic here
};

function capitalizeFirstLetter(string: string) {
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function onlyFirstLetterCapitalize(string: string) {
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const getCurrentLocale = () => {
  return Intl.DateTimeFormat().resolvedOptions().locale;
};

const getLongDateFormater = (timestamp: any) => {
  // const offset = new Date().getTimezoneOffset() * 60 * 1000;
  const formatedDate = new Date(timestamp).toLocaleString(
    Intl.DateTimeFormat().resolvedOptions().locale,
    {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    },
  );

  console.log('formatedDate', formatedDate);
  return formatedDate;
};

export const formatTimeByOffset = (dateString: any) => {
  return ''; //`${newDateString}`;
};

const formatDate = (date: any, format: string = 'MMM DD, YYYY') => {
  return moment(date).format(format);
};

const formatMonth = (date: any) => {
  return moment(date).format('MMM YYYY');
};

const formatDateTime = (date: any) => {
  return moment(date).format('MMM DD, YYYY hh:mm A');
};

const formatTime = (date: any, format: string = 'hh:mm A') => {
  return moment(date).format(format);
};

const convertFormateDate = (date: any, format: string) => {
  return moment(date).format(format);
};

const concateDateTimeToTimestamp = (startDate: string, startTime: string) => {
  let datetime = moment(startDate + ' ' + startTime);
  return datetime.toDate().getTime();
};

const compareTwoTimestamps = (
  timestamp1: number,
  timestamp2: number,
  isCheck?: boolean,
) => {
  const startDate = moment(moment(timestamp1).toDate(), 'YYYY-MM-DD hh:mm');
  const endDate = moment(moment(timestamp2).toDate(), 'YYYY-MM-DD hh:mm');
  if (!isCheck && startDate.isSame(endDate)) {
    return "Start date and End date can't be same";
  }
  if (startDate.isSame(endDate, 'day')) {
    if (endDate.isBefore(startDate)) {
      return 'End time cannot be less than Start time.';
    }
  }
  if (startDate.isAfter(endDate)) {
    return 'End Date cannot be less than Start Date.';
  }
  return '';
};

const compareTwoTimestampsForTime = (
  timestamp1: number,
  timestamp2: number,
  isCheck?: boolean,
) => {
  const startDate = moment(moment(timestamp1).toDate(), 'YYYY-MM-DD hh:mm');
  const endDate = moment(moment(timestamp2).toDate(), 'YYYY-MM-DD hh:mm');
  if (!isCheck && startDate.isSame(endDate)) {
    return "Start time and End time can't be same";
  }
  if (startDate.isAfter(endDate)) {
    return 'End time cannot be less than Start time.';
  }
  return '';
};

const differenceInDaysAndHours = (startDate: string, endDate: string) => {
  // Parse the dates using Moment.js
  // const startMoment: any = moment(startDate);
  // const endMoment: any = moment(endDate);

  // Difference in milliseconds
  var difference = new Date(endDate).getTime() - new Date(startDate).getTime();

  // Convert difference to days, rounding off to the nearest day
  var days = Math.round(difference / (1000 * 60 * 60 * 24));
  days += 1;
  if (days <= 1) {
    return '1 Day';
  }

  if (days > 1) {
    return days + ' Days';
  }

  return ``;
};

const formatDuration = (durationInHours: number) => {
  // If the duration is a multiple of 24 hours, show it in days
  if (durationInHours % 24 === 0) {
    const days = durationInHours / 24;
    return `${days} day${days > 1 ? 's' : ''}`;
  }
  return `${durationInHours} hr${durationInHours !== 1 ? 's' : ''}`;
};

const formatTags = (tags: string) => {
  return tags
    ?.split(',')
    .map(
      (item, index) =>
        item.toUpperCase() + (tags?.split(',').length - 1 != index ? ', ' : ''),
    );
};
const getTimePeriod = (startDate: string, endDate: string) => {
  var startDate1 = moment(startDate, 'DD.MM.YYYY');
  var endDate1 = moment(endDate, 'DD.MM.YYYY');

  return endDate1.diff(startDate1, 'days');
};

function formatTimeElapsed(dateString: Date) {
  //write your logic here 
}

function formatTimeNotes(dateString: Date) {
  //write your logic here 
}

function formatNotificationTime(dateString: Date) {
 
}

function removeUnderScoreFunction(data) {
  // Split the words by _
  let words = data.split('_');

  // Capitalize the first letter of each word
  let capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the capitalized words back together
  let capitalizedString = capitalizedWords.join(' ');

  return capitalizedString;
}

const openInAppBrowser = async (url: string) => {
  //write your logic here
};

const getFileExtension = (txt: any) => {
  if (txt?.length > 0) {
    return txt
      ?.split(/\.(?=[^\.]+$)/)
      ?.pop()
      ?.toLowerCase();
  }
};

const get_url_extension = (txt: string) => {
  return txt.split(/[#?]/)[0].split('.').pop().trim();
};
const imageFormats: Array<string> = [
  'jpeg',
  'png',
  'jpg',
  'PNG',
  'JPEG',
  'HEIF',
  'gif',
];
const videoFormatsCheck = (url: string) => {
  // ['mp4', 'wmv', 'avi']
  return url.endsWith('.mp4') || url.endsWith('.mp4');
};
const firstLetterCapital = (str: string) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};

const isValidUrl = (url: string) => {
  const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return pattern.test(url);
};
const findMinMaxDate = ({scheduleData}) => {
  let minDate = scheduleData?.[0]?.startDate;
  let maxDate = scheduleData?.[0]?.endDate;

  scheduleData?.forEach(item => {
    if (item.startDate < minDate) {
      minDate = item.startDate;
    }
    if (item.endDate > maxDate) {
      maxDate = item.endDate;
    }
  });
  return {minDate, maxDate};
};

const uploadDocsToS3 = async (
  items: Array<any>,
  onProgressUpdate: Function,
) => {
 // write your code here
};

const S3ToPublicUrl = (url: string) => {
  return url; //`${SERVICE_URLS.AWS_SERVE_URL}${name}`;
};

const getNextDays = (days: number) => {
  return moment().add(days, 'hours').format('MMM DD, YYYY hh:mm A');
};

const getCurrenteDateTimestamp = () => {
  const now = new Date();
  const localTimestamp = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
    now.getMilliseconds(),
  ).getTime();

  console.log(localTimestamp);
  return Date.now(); //localTimestamp;
};

const getFutureDateTimestamp = (currentDate: number) => {
  // Use moment to manipulate the current date
  //const futureDate = moment(currentDate).add(3, 'days').toDate();
  const futureDate = moment(currentDate).add(1, 'month').toDate();
  // Return the timestamp of the future date
  return futureDate.getTime();
};

const getCurrentDateWithZeroTime = () => {
  const today = new Date();
  let date = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  return new Date(`${year}-${month + 1}-${date}T00:00:00`);
};

const getTotalCartItems = (cart: any) => {
  return (
    (cart &&
      cart.length > 0 &&
      cart.reduce((total: number, item: any) => {
        return (
          total +
          (item?.groupedProducts?.reduce((groupTotal: number, group: any) => {
            return groupTotal + (group?.products?.length || 0);
          }, 0) || 0)
        );
      }, 0)) ||
    0
  );
};

const generateUniqueId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

const generateTimeStamp = (startDate: any, startTime: any) => {
  var newStartDate = `${new Date(startDate).getDate()}/${
    new Date(startDate).getMonth() + 1
  }/${new Date(startDate).getFullYear()}`;
  var newStartTime = `${new Date(startTime).getHours()}:${new Date(
    startTime,
  ).getMinutes()}`;

  var orderStartTime = moment(
    newStartDate + ' ' + newStartTime,
    'DD/MM/YYYY HH:mm',
  )
    .toDate()
    .getTime();
  return orderStartTime;
};

const dateToTimestamp = (date: Date) => {
  return date.getTime();
};

interface PermissionObj {
  edit: boolean;
  view: boolean;
  delete: boolean;
  extend: boolean;
}

const findMinMaxTimes = (data: Array<any>) => {
  if (!data.length)
    return {
      startTime: new Date(),
      endTime: new Date(),
    };

  let minStartTime = moment(data[0].startTime);
  let maxEndTime = moment(data[0].endTime);

  data.forEach(entry => {
    const startTime = moment(entry.startTime);
    const endTime = moment(entry.endTime);

    if (startTime.isBefore(minStartTime)) {
      minStartTime = startTime;
    }
    if (endTime.isAfter(maxEndTime)) {
      maxEndTime = endTime;
    }
  });

  return {
    startTime: minStartTime,
    endTime: maxEndTime,
  };
};

const checkEntityPermission = ({
  permissionObj,
  permissionString,
}: {
  permissionObj: PermissionObj;
  permissionString: 'edit' | 'view' | 'delete' | 'extend';
}) => {
  return permissionObj[permissionString];
};

const _CheckProductionDateValidation = (
  scheduleData: any[],
  updatedScheduleType: string,
  updatedStartDate: string,
  updatedEndDate: string,
) => {
  let error = '';
  const startMoment = moment(updatedStartDate).startOf('day');
  const endMoment = moment(updatedEndDate).startOf('day');
  if (startMoment && endMoment && startMoment.isAfter(endMoment)) {
    error = 'End date should be greater than start date.';
    return error;
  }
  return error;
};

const _checkSetDateValidation = (
  scheduleData: any[],
  updatedScheduleType: string,
  updatedStartDate: string,
  updatedEndDate: string,
) => {
  let error = '';
  const startMoment = moment(updatedStartDate).startOf('day');
  const endMoment = moment(updatedEndDate).startOf('day');

  if (startMoment && endMoment && startMoment.isAfter(endMoment)) {
    error = 'End date should be greater than start date.';
    return error;
  }
  return error;
};

const weekNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const isDatePassed = (timestamp2: string) => {
  const startDate = moment(new Date(), 'YYYY-MM-DD hh:mm');
  const endDate = moment(moment(timestamp2).toDate(), 'YYYY-MM-DD hh:mm');
  if (startDate.isAfter(endDate)) {
    return true;
  }
  return false;
};


const mediaSize = (size: number) =>
  (size / (1024 * 1024)).toFixed(2) !== '0.00'
    ? `${(size / (1024 * 1024)).toFixed(2)} MB`
    : `${(size / 1024).toFixed(2)} KB`;

const renderDay = (date: Date) => {
  let today = new Date();
  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  if (moment(date).startOf('days').isSame(moment(today).startOf('days'))) {
    return 'Today';
  } else if (
    moment(date).startOf('days').isSame(moment(yesterday).startOf('days'))
  ) {
    return 'Yesterday';
  } else {
    return 'Earlier';
  }
};

const formatTimestamp = (timestamp: number, format = 'dddd, ') =>
  moment.unix(timestamp / 1000).format(format);

const formatDateStamp = (timestamp: number, format = 'MMMM DD') => {
  return moment.unix(timestamp / 1000).format(format);
};

const titleMappings = {
  regions: 'Regions',
  productions: 'Production',
  episodes: 'Episode',
  sets: 'Sets',
  locations: 'Locations',
  vendors: 'Vendors',
  orders: 'Orders',
};


const openDocumentPicker = (
  //options: DocumentPickerOptions,
  callback: Function,
) => {
  //write your logic here
};

const getStartEndTimeOfDate = (date: any) => {
  const startTime = moment(date).startOf('day').toDate();
  const endTime = moment(date).endOf('day').toDate();

  return {startTime, endTime};
};
const checkForStoragePermission = async () => {
  try {
    let permissionStatus = await check(
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    );
    if (permissionStatus !== RESULTS.GRANTED) {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        {
          buttonPositive: 'Allow',
          title: 'Storage Permission Required',
          message: 'App needs access to your storage to download the file',
        },
      );
      return permissionStatus;
    }
    return permissionStatus;
  } catch (error) {
    return RESULTS.UNAVAILABLE;
  }
};

const getUniqueFileName = async (directoryPath: string, fileName: string) => {
  let count = 1;
  let baseFileName = fileName.substring(0, fileName.lastIndexOf('.'));
  let extension = fileName.substring(fileName.lastIndexOf('.') + 1);

  let newFileName = fileName;
  let fileExists = await RNFS.exists(`${directoryPath}/${newFileName}`);

  while (fileExists) {
    newFileName = `${baseFileName}(${count}).${extension}`;
    fileExists = await RNFS.exists(`${directoryPath}/${newFileName}`);
    count++;
  }

  return newFileName;
};

const downloadFile = async (
  fileUrl: string,
  fileName: string,
  downloadOptions: {
    begin: (res: any) => {};
    progress: (progress: number) => {};
    onComplete: (downloadDest: string) => {};
    onError: (error: any) => {};
  },
) => {
  try {
    if (!isIos()) {
      let permissionStatus = await check(
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      );
      if (permissionStatus !== RESULTS.GRANTED) {
        permissionStatus = await request(
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          {
            buttonPositive: 'Allow',
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download the file',
          },
        );
        if (permissionStatus == RESULTS.GRANTED) {
          return;
        }
      }
    }

    const directoryPath = isIos()
      ? RNFS.DocumentDirectoryPath
      : RNFS.DownloadDirectoryPath;
    const uniqueFileName = await getUniqueFileName(directoryPath, fileName);
    const myDate = Date.now();
    const downloadDest = isIos()
      ? `${directoryPath}/${uniqueFileName}`
      : `${directoryPath}/${myDate}${uniqueFileName}`;

    const options = {
      fromUrl: fileUrl,
      toFile: downloadDest,
      background: true,
      begin: (res: any) => {
        downloadOptions.begin(res);
        console.log('Download started');
      },
      progress: (res: string) => {
        const percentage = (res.bytesWritten / res.contentLength) * 100;
        // console.log(`Progress: ${percentage.toFixed(2)}%`);
        downloadOptions.progress(parseInt(percentage.toFixed(2)));
      },
    };

    const download = RNFS.downloadFile(options);
    const result = await download.promise;

    if (result.statusCode === 200) {
      // Alert.alert('Success', 'File downloaded successfully');
      console.log('File saved to:', downloadDest);
      downloadOptions.onComplete(downloadDest);
    } else {
      // Alert.alert('Error', 'Failed to download file');
      downloadOptions.onError('Failed to download file');
    }
  } catch (err) {
    downloadOptions.onError('An error occurred while downloading the file');
    // console.log('Download error:', err);
    // Alert.alert('Error', 'An error occurred while downloading the file');
  }
};

const convertStringToSpace = (inputString: string) => {
  if (typeof inputString !== 'string') return inputString;
  return inputString
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const splitEmail = (email: string) => {
  const [localPart, domainPart] = email?.split('@');
  if (!localPart || !domainPart) {
    return email;
  }
  const obfuscatedLocal =
    localPart.charAt(0) + '*'.repeat(localPart.length - 2);
  return `${obfuscatedLocal}@${domainPart}`;
};

const getTimeDifference = (date1: string, date2: string) => {
  const diffInMilliseconds = Math.abs(new Date(date2) - new Date(date1));

  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  if (diffInDays > 0) {
    return diffInDays + ' days';
  } else if (diffInDays === 0 && diffInHours > 0) {
    return (
      diffInHours + ' hrs ' + (diffInMinutes > 0 ? diffInMinutes + ' min' : '')
    );
  } else if (diffInHours === 0 && diffInMinutes > 0) {
    return diffInMinutes + ' min';
  } else if (diffInMinutes === 0 && diffInSeconds > 0) {
    return diffInSeconds + ' sec';
  } else if (diffInSeconds === 0 && diffInMilliseconds > 0) {
    return diffInMilliseconds + ' ms';
  } else if (diffInMilliseconds === 0) {
    return '0 ms';
  }
};

const openMapsApp = async (latitude: any, longitude: any) => {
  try {
    const googleMapsAppUrl = `comgooglemaps://?q=${latitude},${longitude}`;
    const appleMapsUrl = `maps://?q=${latitude},${longitude}`;
    const webURL = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.canOpenURL(googleMapsAppUrl)
      .then(supported => {
        if (supported) {
          Linking.openURL(googleMapsAppUrl);
        } else {
          if (Platform.OS === 'ios') {
            Linking.canOpenURL(appleMapsUrl)
              .then(supported => {
                if (supported) {
                  Linking.openURL(appleMapsUrl);
                } else {
                  Linking.openURL(webURL);
                }
              })
              .catch(err => console.error('Error checking Apple Maps', err));
          } else {
            Linking.openURL(webURL);
          }
        }
      })
      .catch(err => console.error('Error checking Google Maps', err));
  } catch (error) {
    Linking.openURL(webURL);
  }
};

const logoutFireBaseUser = async () => {
 //write your logic here
};

function roundToNearest30(date) {
  const minutes = date.getMinutes();
  const roundedMinutes = minutes < 15 || minutes >= 45 ? 0 : 30;

  // Set the minutes to the rounded value
  date.setMinutes(roundedMinutes);
  // Reset seconds and milliseconds
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
}

const openMapsForDirections = async (
  sourceLatitude: any,
  sourceLongitude: any,
  destLatitude: any,
  destLongitude: any,
) => {
  const origin = `${sourceLatitude},${sourceLongitude}`;
  const destination = `${destLatitude},${destLongitude}`;

  const googleMapsDirectionsURL = `comgooglemaps://?saddr=${origin}&daddr=${destination}&directionsmode=driving`;
  const appleMapsURL = `maps://?saddr=${origin}&daddr=${destination}`;

  Linking.canOpenURL(googleMapsDirectionsURL)
    .then(supported => {
      if (supported) {
        Linking.openURL(googleMapsDirectionsURL);
      } else {
        if (Platform.OS === 'ios') {
          Linking.canOpenURL(appleMapsURL)
            .then(supported => {
              if (supported) {
                Linking.openURL(appleMapsURL);
              } else {
                const webURL = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
                Linking.openURL(webURL);
              }
            })
            .catch(err => console.error('Error checking Apple Maps', err));
        } else {
          const webURL = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
          Linking.openURL(webURL);
        }
      }
    })
    .catch(err => console.error('Error checking Google Maps', err));
};

//this function was created because, in android the screenshot images don't contain the name key
function getFileNameFromPath(path: string){
  return path.split('/').pop();
}


export const validateCity = (text: string) => {
  const cityRegex = /^[A-Za-z\s&]{3,}$/;
  return cityRegex.test(text);
};

export const validateState = (text: string) => {
  const stateRegex = /^[A-Za-z\s&]{3,}$/;
  return stateRegex.test(text);
};

// Email Validation
export const validateEmail = (text: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(text);
};

// Password Validation
export const validatePassword = (password: string) => {
  const passwordRegex =
    /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@$!%?&#])[A-Za-z\d@$!%?&#]{8,}$/;
  return passwordRegex.test(password);
};

// Name Validation
export const validateName = (text: string) => {
  const nameRegex = /^[A-Za-z\s]{3,}$/;
  return nameRegex.test(text);
};

// Name Validation
export const specialNameRegex = (text:string) => {
  const specialNameRegex = /^.{1,99}$/;
  return specialNameRegex.test(text);
}

// Phone Number Validation
export const validatePhoneNumber = (number: string) => {
  const phoneRegex = /^[0-9]{10,13}$/;
  return phoneRegex.test(number);
};


export const validateField = (value: string) => {
  const fieldRegex = /(?:.\d.){5,}/;
  return fieldRegex.test(value);
};


export const extractYouTubeVideoId = (url: string) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  return match ? match[1] : null;
};

export default {
  openMapsApp,
  openMapsForDirections,
  isIos,
  concateDateTimeToTimestamp,
  compareTwoTimestamps,
  convertFormateDate,
  formatTimeByOffset,
  getLongDateFormater,
  getCurrentLocale,
  formatDate,
  formatTime,
  pressThrottle,
  checkRateModelType,
  removeEmojis,
  normalizeEmail,
  normalizeName,
  createQueryParams,
  _linearAnimation,
  getLocationLatLng,
  uploadImageToBucket,
  getDiscountOff,
  getPriceWithCurrency,
  checkCameraPermission,
  checkGalleryPermission,
  capitalizeFirstLetter,
  onlyFirstLetterCapitalize,
  _getLocationFromZipCode,
  checkServiceRateModelType,
  getPriceDuration,
  _fadeInAnimation,
  checkMyPermission,
  checkMyAndroidPermission,
  formatDateTime,
  getTimePeriod,
  differenceInDaysAndHours,
  formatTags,
  getFileExtension,
  get_url_extension,
  imageFormats,
  openInAppBrowser,
  videoFormatsCheck,
  firstLetterCapital,
  isValidUrl,
  getPriceDurationDetails,
  formatTimeElapsed,
  formatNotificationTime,
  removeUnderScoreFunction,
  findMinMaxDate,
  uploadDocsToS3,
  getNextDays,
  getTotalCartItems,
  formatMonth,
  weekNames,
  checkEntityPermission,
  generateUniqueId,
  generateTimeStamp,
  isDatePassed,
  _checkSetDateValidation,
  _CheckProductionDateValidation,
  mediaSize,
  renderDay,
  getFutureDateTimestamp,
  dateToTimestamp,
  formatTimestamp,
  formatDateStamp,
  S3ToPublicUrl,
  openDocumentPicker,
  getFileType,
  getStartEndTimeOfDate,
  downloadFile,
  checkForStoragePermission,
  convertStringToSpace,
  findMinMaxTimes,
  getUniqueFileName,
  compareTwoTimestampsForTime,
  splitEmail,
  logoutFireBaseUser,
  getTimeDifference,
  formatDuration,
  formatTimeNotes,
  roundToNearest30,
  getCurrentDateWithZeroTime,
  getCurrenteDateTimestamp,
  getFileNameFromPath,
  validatePassword,
  validateName,
  validatePhoneNumber,
  validateField
};


export const requestPdfStoragePermission = async () => {
  if (Platform.OS === 'android') {
    if (Platform.Version >= 33) {
      // For Android 13+ (API 33+)
      const imagePermission = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      const videoPermission = await request(PERMISSIONS.ANDROID.READ_MEDIA_VIDEO);
      const audioPermission = await request(PERMISSIONS.ANDROID.READ_MEDIA_AUDIO);

      return (
        imagePermission === RESULTS.GRANTED ||
        videoPermission === RESULTS.GRANTED ||
        audioPermission === RESULTS.GRANTED
      );
    } else {
      // For Android 12 and below
      const permission = PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;
      const result = await request(permission);
      return result === RESULTS.GRANTED;
    }
  }
  return true; 
};

export const downloadAndOpenPDF = async (pdfUrl: string, fileName: string) => {
  try {
    // Ensure storage permission is granted
    const hasPermission = await requestPdfStoragePermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Storage permission is required to download files.');
      return;
    }

    const filePath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

    // Download the file
    const response = await RNFetchBlob.config({
      fileCache: true,
      path: filePath,
    }).fetch('GET', pdfUrl);

    console.log('File downloaded to:', response.path());

    // CustomSnackBar.show('Coming Soon!', 'success', 600)
    Alert.alert('Download Complete', 'File saved successfully!', [
      {
        text: 'Open',
        onPress: async () => {
          try {
            await FileViewer.open(response.path(), {
              showOpenWithDialog: true,
              mimeType: 'application/pdf',
            });
          } catch (err) {
            console.log('Error opening file:', err);
            Alert.alert('No App Found', 'Please install a PDF viewer to open this file.');
          }
        },
      },
      { text: 'OK', style: 'cancel' },
    ]);
  } catch (error) {
    console.error('Error downloading file:', error);
    Alert.alert('Error', 'Failed to download the file.');
  }
};


interface Slide {
  id: string;
  title: string;
  description: string;
  image: any;
  bgColor: string;
  textColor: string;
}

export const slides: Slide[] = [
  {
    id: '1',
    title: 'Lorem Ipsum',
    description:
      '"Portable Generator|Inverter Generator|Silent Generator|Price & Features"',
    image: Images.bannerImage,
    bgColor: '#E41D2D',
    textColor: colors.white,
  },
  {
    id: '2',
    title: 'Special Offer',
    description: '"Portable Generator|Inverter Generator|Silent Generator|Price & Features"',
    image: Images.bannerImage,
    bgColor: '#FFD6DA',
    textColor: colors.black,
  },
  {
    id: '3',
    title: 'Lorem Ipsum',
    description:
      '"Portable Generator|Inverter Generator|Silent Generator|Price & Features"',
    image: Images.bannerImage,
    bgColor: '#E41D2D',
    textColor: colors.white,
  },
 
];


export const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
      return (
        granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
      );
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true; // iOS permissions handled via Info.plist
};





// const requestStoragePermission = async (): Promise<boolean> => {
//   if (Platform.OS === 'android') {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       {
//         title: 'Storage Permission Required',
//         message: 'App needs access to storage to download files.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       }
//     );
//     return granted === PermissionsAndroid.RESULTS.GRANTED;
//   }
//   return true; // iOS doesn't need this
// };

const requestStoragePermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    if (Platform.Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
  }
  return true; // iOS doesn't require this
};
export const downloadFilePlatform = async (fileUrl: string, fileName: string) => {
  const hasPermission = await requestStoragePermission();
  if (!hasPermission) {
    Alert.alert('Permission Denied', 'Storage permission is required to download the file.');
    return;
  }

  const { config, fs } = RNFetchBlob;
  const isIOS = Platform.OS === 'ios';

  const downloadDir = isIOS ? fs.dirs.DocumentDir : fs.dirs.DownloadDir;
  const filePath = `${downloadDir}/${fileName}`;

  config({
    fileCache: true,
    appendExt: fileName.split('.').pop(), // get extension
    path: filePath,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      path: filePath,
      description: 'File downloaded by your app',
      mediaScannable: true,
      title: fileName,
    },
  })
    .fetch('GET', fileUrl)
    .then(res => {
      if (Platform.OS === 'ios') {
        RNFetchBlob.ios.previewDocument(res.path()); 
      }
      // Alert.alert('Download complete', `${fileName} has been downloaded.`);
      CustomSnackBar.show(
       'Download complete successfully',
        'success',
        400,
      );
    })
    .catch(err => {
      console.error(err);
      Alert.alert('Download Failed', 'Something went wrong while downloading the file.',err);
    });
};