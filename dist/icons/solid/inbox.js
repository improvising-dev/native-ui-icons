import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgInbox = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path d="m20.79 11.34-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z" data-name="inbox"/>
    </G>
  </Svg>);
export default memo(SvgInbox);
