import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgCornerRightDownOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="M18.78 14.38a1 1 0 0 0-1.4-.16L14 16.92V8a3 3 0 0 0-3-3H6a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 0 0 .16-1.4z"
        data-name="corner-right-down"
      />
    </G>
  </Svg>
)

export default memo(SvgCornerRightDownOutline)
