import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometer = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path d="M12 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 12 4a1 1 0 0 0-1 1v4.54z" data-name="thermometer"/>
    </G>
  </Svg>);
export default memo(SvgThermometer);
