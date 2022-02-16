import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgCopy = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path d="M18 9h-3V5.67A2.68 2.68 0 0 0 12.33 3H5.67A2.68 2.68 0 0 0 3 5.67v6.66A2.68 2.68 0 0 0 5.67 15H9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zm-9 3v1H5.67a.67.67 0 0 1-.67-.67V5.67A.67.67 0 0 1 5.67 5h6.66a.67.67 0 0 1 .67.67V9h-1a3 3 0 0 0-3 3z" data-name="copy"/>
    </G>
  </Svg>);
export default memo(SvgCopy);