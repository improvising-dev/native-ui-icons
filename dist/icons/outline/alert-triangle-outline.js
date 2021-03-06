import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import { memo } from 'react';
const SvgAlertTriangleOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="alert-triangle">
        <Path d="M22.56 16.3 14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zm-1.7 2.05a1.31 1.31 0 0 1-1.19.65H4.33a1.31 1.31 0 0 1-1.19-.65 1 1 0 0 1 0-1l7.68-12.73a1.48 1.48 0 0 1 2.36 0l7.67 12.72a1 1 0 0 1 .01 1.01z"/>
        <Circle cx={12} cy={16} r={1}/>
        <Path d="M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgAlertTriangleOutline);
