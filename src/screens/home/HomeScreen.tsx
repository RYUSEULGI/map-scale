import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import useLocation from '../../hooks/useLocation';

function HomeScreen() {
  const {isLocationPermissionGranted, getMyLocation} = useLocation();

  const [permissionLoading, setPermissionLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setPermissionLoading(true);
      const isGranted = await isLocationPermissionGranted();

      if (!isGranted) {
        setPermissionLoading(false);
        return;
      }

      await getMyLocation();
      setPermissionLoading(false);
    })();
  }, []);

  return (
    <View>
      <Text>홈</Text>
    </View>
  );
}

export default HomeScreen;
