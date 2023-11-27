import Geolocation from '@react-native-community/geolocation';
import {useState} from 'react';
import {openSettings} from 'react-native-permissions';
import {ICoordinates} from '../types/common';
import {
  isPermissionBlock,
  isPermissionDenied,
  isPermissionGranted,
  isPermissionUnavailable,
  locationPermissionCheck,
  requestLocationPermission,
} from '../utils/location';

const defaultCoordinates: ICoordinates = {
  latitude: 37.4979278,
  longitude: 127.0275833,
};

const useLocation = () => {
  const [coordinates, setCoordinates] = useState<ICoordinates>(
    defaultCoordinates,
  );

  const getCurrentPosition = async (): Promise<ICoordinates> => {
    return new Promise(resolve => {
      Geolocation.getCurrentPosition(
        pos => {
          const longitude: number = Number(pos.coords.longitude);
          const latitude: number = Number(pos.coords.latitude);

          resolve({latitude, longitude});
        },
        () => {
          resolve(defaultCoordinates);
        },
        {enableHighAccuracy: false, timeout: 20000},
      );
    });
  };

  const isLocationPermissionRequestSuccess = async (): Promise<boolean> => {
    const checkStatus = await locationPermissionCheck();

    if (
      isPermissionBlock(checkStatus) ||
      isPermissionUnavailable(checkStatus)
    ) {
      await openSettings();
      return false;
    }

    const status = await requestLocationPermission();

    if (isPermissionGranted(status)) {
      return true;
    }

    return false;
  };

  const isLocationPermissionGranted = async () => {
    const status = await locationPermissionCheck();

    if (
      isPermissionDenied(status) ||
      isPermissionBlock(status) ||
      isPermissionUnavailable(status)
    ) {
      return false;
    } else if (isPermissionGranted(status)) {
      return true;
    }
  };

  const getMyLocation = async () => {
    const {longitude, latitude} = await getCurrentPosition();
    setCoordinates({longitude, latitude});
  };

  return {
    isLocationPermissionGranted,
    isLocationPermissionRequestSuccess,
    getMyLocation,
    coordinates,
  };
};

export default useLocation;
