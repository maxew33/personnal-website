import React from 'react'

export default function Wave({ color, positionPlace, positionValue }) {
    const fillColor = color || 'var(--primary)'
    const value = positionValue || '-2.5rem'
    const topPosition = positionPlace === 'bottom' ? 'auto' : value
    const bottomPosition = positionPlace === 'bottom' ? value : 'auto'

    const svgStyle = {
        height: '5rem',
        position: 'absolute',
        top: topPosition,
        bottom: bottomPosition,
    }

    return (
        <svg
            viewBox="0 0 370.41666 84.666664"
            width="100%"
            height="320"
            preserveAspectRatio="none"
            style={svgStyle}
        >
            {/* <path
        d="M 370.41666,84.666666
        V 16.404167
        c 0,0 -61.19208,17.4625 -92.60416,17.4625 -31.41209,0 -61.67351,-11.984049 -92.60417,-17.4625
        C 154.39885,10.947178 123.89318,1.0583327 92.60416,1.058333 61.31514,1.0583332 0,16.404167 0,16.404167
        v 68.262499
        h 370.41666"
        fill={fillColor}
    /> */}
            <path
                d="M 370.41666,84.666666
        V 16.404167
        c 0,0 -61.18339,10.726548 -92.08753,10.74629 -31.24627,0.01996 -62.06547,-7.297241 -93.1208,-10.74629
        C 140.72266,11.463526 96.325761,5.462904 51.689031,2.154274 34.491575,0.87953863 0,0 0,0
        v 84.666666
        h 370.41666"
                fill={fillColor}
            />
        </svg>
    )
}

/*M 370.41666,84.666666
V 16.404167
c 0,0 -61.18339,10.726548 -92.08753,10.74629 -31.24627,0.01996 -62.17831,-6.399775 -93.1208,-10.74629
C 154.22351,12.051705 123.77259,3.8027597 92.60416,1.058333 61.853068,-1.6493463 0,0 0,0
v 84.666666
h 370.41666*/
