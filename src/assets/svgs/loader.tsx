import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const LoaderSvg = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill="#141414"
      d="m24.538 10.703 4.76-3.652-1.217-1.587-4.76 3.652zM24.16 21.867l5.196 3 1-1.732-5.196-3zM25.778 18.296l5.949.783.261-1.983-5.949-.783zM25.912 14.375l5.796-1.553-.518-1.932-5.796 1.553zM21.866 7.84l3-5.196-1.732-1-3 5.197z"
    />
  </Svg>
);
export default LoaderSvg;
