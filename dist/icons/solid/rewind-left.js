import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgRewindLeft = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path d="M18.45 6.2a2.1 2.1 0 0 0-2.21.26l-4.74 3.92V7.79a1.76 1.76 0 0 0-1.05-1.59 2.1 2.1 0 0 0-2.21.26l-5.1 4.21a1.7 1.7 0 0 0 0 2.66l5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59v-2.59l4.74 3.92a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59z" data-name="rewind-left"/>
    </G>
  </Svg>);
export default memo(SvgRewindLeft);
