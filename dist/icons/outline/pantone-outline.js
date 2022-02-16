import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgPantoneOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path d="M20 13.18h-4.06l2.3-2.47a1 1 0 0 0 0-1.41l-4.19-3.86a.93.93 0 0 0-.71-.26 1 1 0 0 0-.7.31l-1.82 2V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13.09A3.91 3.91 0 0 0 6.91 21H20a1 1 0 0 0 1-1v-5.82a1 1 0 0 0-1-1zm-6.58-5.59 2.67 2.49-5.27 5.66v-5.36zM8.82 10v3H5v-3zm0-5v3H5V5zM5 17.09V15h3.82v2.09a1.91 1.91 0 0 1-3.82 0zM19 19h-8.49l3.56-3.82H19z" data-name="pantone"/>
    </G>
  </Svg>);
export default memo(SvgPantoneOutline);