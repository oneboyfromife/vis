import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const HomeSvg = ({active, ...props}: SvgProps & {active?: boolean}) => {
  return active ? (
    <Svg width={21} height={20} fill="none" {...props}>
      <Path
        fill="#292D32"
        d="M19.326 6.01 12.776.77c-1.28-1.02-3.28-1.03-4.55-.01l-6.55 5.25c-.94.75-1.51 2.25-1.31 3.43l1.26 7.54c.29 1.69 1.86 3.02 3.57 3.02h10.6c1.69 0 3.29-1.36 3.58-3.03l1.26-7.54c.18-1.17-.39-2.67-1.31-3.42ZM11.246 16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3Z"
      />
    </Svg>
  ) : (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.504 22V12h6v10m-12-13 9-7 9 7v11a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2V9Z"
      />
    </Svg>
  );
};
export default HomeSvg;
