import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {TNavigationRoutesValues} from 'types/navgation';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: TNavigationRoutesValues, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate({name, params} as never);
  }
}

export function replace(route: TNavigationRoutesValues, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      StackActions.replace(route as never, params as never),
    );
  }
}
