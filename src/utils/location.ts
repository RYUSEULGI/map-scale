import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
import {isIphone} from './iphone';

type PermissionsType =
  | 'unavailable'
  | 'denied'
  | 'blocked'
  | 'granted'
  | 'limited';

const locationPermission = isIphone
  ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
  : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

export const locationPermissionCheck = async (): Promise<PermissionsType> => {
  return await check(locationPermission);
};

export const requestLocationPermission = async (): Promise<PermissionsType> => {
  return await request(locationPermission);
};

export const isPermissionBlock = (type: PermissionsType) => {
  return type === RESULTS.BLOCKED;
};

export const isPermissionGranted = (type: PermissionsType) => {
  return type === RESULTS.GRANTED;
};

export const isPermissionDenied = (type: PermissionsType) => {
  return type === RESULTS.DENIED;
};

export const isPermissionUnavailable = (type: PermissionsType) => {
  return type === RESULTS.UNAVAILABLE;
};

export const requestATTPermission = async (): Promise<PermissionsType> => {
  if (!isIphone) {
    return 'unavailable';
  }

  return await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
};
