import React from 'react'
import { useSpring, animated } from 'react-spring'

const ScaleIn = ({ children }) => {
  const scaleInStyle = useSpring({
    transform: `scale(1)`,
    from: { transform: `scale(0)` },
    config: {
      tension: 300,
      friction: 20,
    },
  })

  return <animated.div style={scaleInStyle}>{children}</animated.div>
}

export default ScaleIn
