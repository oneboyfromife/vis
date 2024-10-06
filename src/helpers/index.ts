import colors from '@theme/colors';

export * from './files';
export * from './numbers';
export * from './navigation';
export * from './responsiveness';

export const getValidationColor = (percentage: number): string => {
  if (percentage === 100) {
    return colors.GREEN_02;
  }
  if (percentage > 34) {
    return colors.GREEN_01;
  }
  if (percentage > 0) {
    return colors.RED_01;
  }
  return colors.TRANSPARENT;
};
