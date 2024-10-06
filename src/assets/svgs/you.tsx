import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const YouSvg = ({active, ...props}: SvgProps & {active?: boolean}) => (
  <Svg width={24} height={24} fill="none" {...props}>
    {active ? (
      <>
        <Path
          fill="#292D32"
          d="M12.75 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12.746 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5Z"
        />
      </>
    ) : (
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.75 21v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2m12-14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    )}
  </Svg>
);
export default YouSvg;
