import { Dimensions, Platform, StatusBar } from 'react-native';

export function isIphoneX(): boolean {
  if (
    Dimensions &&
    typeof Dimensions.get('window') !== 'undefined' &&
    Platform &&
    Platform.OS
  ) {
    const dimen = Dimensions.get('window');
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTV &&
      (dimen.height === 780 ||
        dimen.width === 780 ||
        dimen.height === 812 ||
        dimen.width === 812 ||
        dimen.height === 844 ||
        dimen.width === 844 ||
        dimen.height === 896 ||
        dimen.width === 896 ||
        dimen.height === 926 ||
        dimen.width === 926)
    );
  } else {
    return false;
  }
}

export function ifIphoneX<T>(iphoneXStyle: T, regularStyle: T): T {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe: boolean): number {
  const payload = {
    ios: 0,
    android: 0,
    default: 0,
  };

  if (StatusBar && StatusBar.currentHeight) {
    payload.android = StatusBar.currentHeight;
  }

  if (Dimensions && typeof Dimensions.get('window') !== 'undefined') {
    payload.ios = ifIphoneX(safe ? 44 : 30, 20);
  }

  return Platform.select(payload);
}

export function getBottomSpace(): number {
  return isIphoneX() ? 34 : 0;
}

// Helper function to determine orientation
function getOrientation(): 'portrait' | 'landscape' {
  let width = 0;
  let height = 0;
  if (Dimensions && Dimensions.get) {
    width = Dimensions.get('window').width;
    height = Dimensions.get('window').height;
  }
  return height > width ? 'portrait' : 'landscape';
}

// Function to calculate responsive font size based on the screen's width or height percentage
export function RFPercentageNative(percent: number): number {
  const orientation = getOrientation();
  let height = 0;
  let width = 0;
  if (Dimensions && Dimensions.get) {
    width = Dimensions.get('window').width;
    height = Dimensions.get('window').height;
  }
  const base = orientation === 'portrait' ? height : width;
  const offset =
    Platform.OS === 'ios'
      ? isIphoneX()
        ? 78
        : 20
      : StatusBar && StatusBar.currentHeight
      ? StatusBar.currentHeight
      : 0;

  // In landscape mode, the status bar does not offset the height on iOS
  const adjustedBase =
    Platform.OS === 'ios' && orientation === 'landscape' ? base : base - offset;

  const heightPercent = (percent * adjustedBase) / 100;
  return Math.round(heightPercent);
}

// Function to calculate responsive font size based on device height in relation to standard screen height
export function RFValueNative(
  fontSize: number,
  standardScreenHeight: number = 680
): number {
  const orientation = getOrientation();
  let height = 0;
  let width = 0;
  if (Dimensions && Dimensions.get) {
    width = Dimensions.get('window').width;
    height = Dimensions.get('window').height;
  }
  const base = orientation === 'portrait' ? height : width;
  const offset =
    Platform.OS === 'ios'
      ? isIphoneX()
        ? 78
        : 20
      : StatusBar && StatusBar.currentHeight
      ? StatusBar.currentHeight
      : 0;

  // In landscape mode, the status bar does not offset the height on iOS
  const adjustedBase =
    Platform.OS === 'ios' && orientation === 'landscape' ? base : base - offset;

  const heightPercent = (fontSize * adjustedBase) / standardScreenHeight;
  return Math.round(heightPercent);
}
